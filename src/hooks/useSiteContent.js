import { useMemo } from 'react'

export function useSiteContent() {
  return useMemo(() => {
    const navigation = [
      { label: 'Services', href: '#services' },
      { label: 'Projects', href: '#projects' },
      { label: 'Testimonials', href: '#stories' },
      { label: 'Contact', href: '#contact' }
    ]

    const hero = {
      eyebrow: 'Full-spectrum construction & electrical services',
      heading: 'From feasibility to handover, we stay accountable.',
      lede:
        'We blend engineering rigor with handcrafted details so every residential or commercial build stands the test of time and climate.',
      actions: [
        { label: 'Request a site visit', href: '#contact', variant: 'primary' },
        { label: 'View recent work', href: '#projects', variant: 'ghost' }
      ],
      checklist: [
        'Transparent weekly dashboards',
        'Licensed electrical & safety team onsite',
        'Dedicated quality controller for every project'
      ],
      metric: {
        label: 'On-site snapshot',
        stat: '97%',
        meta: 'Punch-list items cleared before client walk-through',
        notes: ['Live trackers', 'Drone progress', 'Client portal']
      }
    }

    const stats = [
      { label: 'Projects delivered', value: '200+' },
      { label: 'Years of experience', value: '15' },
      { label: 'Average NPS', value: '92' },
      { label: 'Emergency response', value: '24/7' }
    ]

    const services = [
      {
        title: 'Design & Build',
        description:
          'Turnkey villas, residences, and boutique commercial spaces delivered end-to-end with a single accountable partner.',
        tags: ['Structural design', 'Interior finishing', 'Approvals']
      },
      {
        title: 'Electrical & Automation',
        description:
          'Certified electrical layouts, energy audits, and smart automation for safer, more efficient properties.',
        tags: ['HT / LT panels', 'Lighting design', 'IoT enablement']
      },
      {
        title: 'Renovations & Retrofits',
        description:
          'Adaptive reuse, façade makeovers, and modernization services that keep assets relevant and resilient.',
        tags: ['Green upgrades', 'Code compliance', 'Fast-track']
      },
      {
        title: 'Project Management',
        description:
          'Transparent planning, procurement, and supervision to keep every milestone on time and budget.',
        tags: ['Cost control', 'Vendor management', 'QHSE']
      }
    ]

    const differentiators = [
      'Dedicated single point of contact with weekly progress dashboards.',
      'In-house structural, MEP, and safety teams working from unified BIM models.',
      'Local supplier network for premium materials with traceable provenance.',
      'Warranty-backed workmanship plus 24/7 rapid response crew.'
    ]

    const toolkit = [
      'BIM-coordinated drawings and RFIs',
      'Smart inventory with QR-coded materials',
      'Thermal + moisture inspections pre-handover',
      'Dedicated safety marshal on every site'
    ]

    const projects = [
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
        quote:
          'Detail-oriented, safety-first, and proactive about cost control. We continue to trust them for expansion projects.',
        person: 'Rohit Mehta · Managing Partner'
      }
    ]

    return {
      navigation,
      hero,
      stats,
      services,
      differentiators,
      toolkit,
      projects,
      testimonials,
      brandTagline: 'Crafting dependable spaces for modern India'
    }
  }, [])
}
