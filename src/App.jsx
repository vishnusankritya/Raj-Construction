import React from 'react'

const services = [
  {
    title: 'Design & Build',
    description: 'Turnkey villas, residences, and boutique commercial spaces delivered end-to-end with a single accountable partner.',
    tags: ['Structural design', 'Interior finishing', 'Approvals']
  },
  {
    title: 'Electrical & Automation',
    description: 'Certified electrical layouts, energy audits, and smart automation for safer, more efficient properties.',
    tags: ['HT / LT panels', 'Lighting design', 'IoT enablement']
  },
  {
    title: 'Renovations & Retrofits',
    description: 'Adaptive reuse, façade makeovers, and modernization services that keep assets relevant and resilient.',
    tags: ['Green upgrades', 'Code compliance', 'Fast-track']
  },
  {
    title: 'Project Management',
    description: 'Transparent planning, procurement, and supervision to keep every milestone on time and budget.',
    tags: ['Cost control', 'Vendor management', 'QHSE']
  }
]

const differentiators = [
  'Dedicated single point of contact with weekly progress dashboards.',
  'In-house structural, MEP, and safety teams working from unified BIM models.',
  'Local supplier network for premium materials with traceable provenance.',
  'Warranty-backed workmanship plus 24/7 rapid response crew.'
]

const projectHighlights = [
  {
    name: 'Sterling Heights Villas',
    location: 'Hyderabad',
    scope: '28 luxury villas · 14-month delivery',
    outcome: 'Achieved IGBC Silver rating with optimized solar integration.'
  },
  {
    name: 'Nova Corporate Park',
    location: 'Bengaluru',
    scope: '250,000 sq.ft office retrofit',
    outcome: 'Reduced energy spend by 32% with advanced automation and glazing.'
  },
  {
    name: 'Riverstone Residences',
    location: 'Vijayawada',
    scope: 'High-rise residential tower',
    outcome: 'Delivered ahead of schedule with zero lost-time incidents.'
  }
]

const testimonials = [
  {
    quote:
      'Raj Construction made a complex retrofit effortless. Their reporting cadence and execution discipline kept every stakeholder aligned.',
    person: 'Anika Sharma · Facilities Director'
  },
  {
    quote: 'Detail-oriented, safety-first, and proactive about cost control. We continue to trust them for expansion projects.',
    person: 'Rohit Mehta · Managing Partner'
  }
]

const stats = [
  { label: 'Projects delivered', value: '200+' },
  { label: 'Years of experience', value: '15' },
  { label: 'Average NPS', value: '92' },
  { label: 'Emergency response', value: '24/7' }
]

const contactInfo = {
  owner: 'Sourav Singh',
  phone: '+91 98529 73324',
  email: 'build@rajconstruction.example',
  address: '30, Raj Construction Industrial Area, Kokar, Ranchi · 834004'
}

const mapEmbedUrl =
  'https://www.google.com/maps?q=30%20Raj%20Construction%20Industrial%20Area%20Kokar%2C%20Ranchi%20834004&output=embed'

export default function App() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="shell header-grid">
          <div>
            <p className="eyebrow">Raj Construction · Led by {contactInfo.owner}</p>
            <h1 className="brand">Crafting dependable spaces for modern India</h1>
          </div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#stories">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-cta">
            <a className="pill" href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
              {contactInfo.phone}
            </a>
            <a className="link" href="mailto:build@rajconstruction.example">
              build@rajconstruction.example
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="shell hero-grid">
            <div>
              <p className="eyebrow">Full-spectrum construction & electrical services</p>
              <h2>From feasibility to handover, we stay accountable.</h2>
              <p className="lede">
                We blend engineering rigor with handcrafted details so every residential or commercial build stands the test of time and climate.
              </p>
              <div className="actions">
                <a className="button button--primary" href="#contact">
                  Request a site visit
                </a>
                <a className="button button--ghost" href="#projects">
                  View recent work
                </a>
              </div>
              <ul className="check-list">
                <li>Transparent weekly dashboards</li>
                <li>Licensed electrical & safety team onsite</li>
                <li>Dedicated quality controller for every project</li>
              </ul>
            </div>
            <div className="hero-card">
              <p className="hero-card__label">On-site snapshot</p>
              <p className="hero-card__stat">97%</p>
              <p className="hero-card__meta">Punch-list items cleared before client walk-through</p>
              <div className="hero-card__notes">
                <span>Live trackers</span>
                <span>Drone progress</span>
                <span>Client portal</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-band">
          <div className="shell stats-grid">
            {stats.map((item) => (
              <article key={item.label}>
                <p className="stat-value">{item.value}</p>
                <p className="stat-label">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section shell">
          <div className="section-head">
            <p className="eyebrow">What we deliver</p>
            <h3>Integrated services tailored to your build timeline.</h3>
            <p>Every engagement includes detailed reporting, quality gates, and post-handover support.</p>
          </div>
          <div className="cards">
            {services.map((service) => (
              <article key={service.title} className="card">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <div className="tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className="section shell split">
          <div>
            <p className="eyebrow">How we work</p>
            <h3>Precision frameworks and client-first rituals.</h3>
            <p>
              We choreograph design, procurement, and execution using milestone-based governance so you always know what is complete, what is next, and how we de-risk.
            </p>
            <ul className="list">
              {differentiators.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <p className="panel-label">Execution toolkit</p>
            <ul className="panel-list">
              <li>BIM-coordinated drawings and RFIs</li>
              <li>Smart inventory with QR-coded materials</li>
              <li>Thermal + moisture inspections pre-handover</li>
              <li>Dedicated safety marshal on every site</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section shell">
          <div className="section-head">
            <p className="eyebrow">Select deliveries</p>
            <h3>Projects that showcase our craft.</h3>
          </div>
          <div className="project-grid">
            {projectHighlights.map((project) => (
              <article key={project.name} className="project-card">
                <p className="project-label">{project.location}</p>
                <h4>{project.name}</h4>
                <p className="project-scope">{project.scope}</p>
                <p>{project.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="stories" className="section shell testimonials">
          <div className="section-head">
            <p className="eyebrow">Testimonials</p>
            <h3>Partners speak about our discipline.</h3>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote key={item.person}>
                <p>“{item.quote}”</p>
                <footer>{item.person}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="contact" className="section shell contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h3>Ready to walk your site?</h3>
            <p>
              Send across your drawings or schedule a walkthrough. We will share a scope note and phased budget within five working days.
            </p>
          </div>
          <div className="contact-card">
            <p>Phone</p>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
            <p>Email</p>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <p>Office</p>
            <span>{contactInfo.address}</span>
            <p>Office hours</p>
            <span>Mon – Sat · 9 AM – 7 PM</span>
          </div>
          <div className="map-card">
            <iframe
              title="Raj Construction Ranchi map"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <p>© {new Date().getFullYear()} Raj Construction. All rights reserved.</p>
          <p>Licensed contractors · ISO 9001 · ISO 45001</p>
        </div>
      </footer>
    </div>
  )
}
