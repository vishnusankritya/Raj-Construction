import React from 'react'

export default function ContactSection({ contact }) {
  return (
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
        <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
        <p>Email</p>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <p>Office</p>
        <span>{contact.address}</span>
        <p>Office hours</p>
        <span>{contact.officeHours}</span>
      </div>
      <div className="map-card">
        <iframe
          title="Raj Construction Ranchi map"
          src={contact.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  )
}
