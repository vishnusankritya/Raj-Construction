import React from 'react'

export default function ServicesSection({ services }) {
  return (
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
  )
}
