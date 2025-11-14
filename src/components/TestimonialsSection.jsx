import React from 'react'

export default function TestimonialsSection({ testimonials }) {
  return (
    <section id="stories" className="section testimonials">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">Testimonials</p>
          <h3>Partners speak about our discipline.</h3>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.person}>
              <div className="testimonial-photo">
                {item.photo ? (
                  <img src={item.photo} alt={item.person + ' photo'} />
                ) : (
                  <div className="testimonial-photo--placeholder" />
                )}
              </div>
              <blockquote>
                <p>“{item.quote}”</p>
                <footer>{item.person}</footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
