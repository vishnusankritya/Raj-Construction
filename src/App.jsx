import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import StatsBand from './components/StatsBand'
import ServicesSection from './components/ServicesSection'
import ApproachSection from './components/ApproachSection'
import ProjectsSection from './components/ProjectsSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { useSiteContent } from './hooks/useSiteContent'
import { useContactInfo } from './hooks/useContactInfo'
import { useHeaderCollapse } from './hooks/useHeaderCollapse'

export default function App() {
  const {
    navigation,
    hero,
    stats,
    services,
    differentiators,
    toolkit,
    projects,
    testimonials,
    brandTagline
  } = useSiteContent()
  const contact = useContactInfo()
  const isCondensed = useHeaderCollapse()

  return (
    <div className="site">
      <Header
        brandTagline={brandTagline}
        owner={contact.owner}
        phone={contact.phone}
        email={contact.email}
        navigation={navigation}
        isCondensed={isCondensed}
      />
      <main>
        <Hero hero={hero} />
        <StatsBand stats={stats} />
        <ServicesSection services={services} />
        <ApproachSection differentiators={differentiators} toolkit={toolkit} />
        <ProjectsSection projects={projects} />
        <TestimonialsSection testimonials={testimonials} />
        <ContactSection contact={contact} />
      </main>
      <Footer year={new Date().getFullYear()} />
    </div>
  )
}
