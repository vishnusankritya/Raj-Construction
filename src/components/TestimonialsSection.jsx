import React from 'react'

export default function TestimonialsSection({ testimonials }) {
  return (
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
  )
}
