import React from 'react'

export default function Hero({ hero }) {
  return (
    <section className="hero">
      <div className="shell hero-grid">
        <div>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h2>{hero.heading}</h2>
          <p className="lede">{hero.lede}</p>
          <div className="actions">
            {hero.actions.map((action) => (
              <a key={action.label} className={`button button--${action.variant}`} href={action.href}>
                {action.label}
              </a>
            ))}
          </div>
          <ul className="check-list">
            {hero.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="hero-card">
          <p className="hero-card__label">{hero.metric.label}</p>
          <p className="hero-card__stat">{hero.metric.stat}</p>
          <p className="hero-card__meta">{hero.metric.meta}</p>
          <div className="hero-card__notes">
            {hero.metric.notes.map((note) => (
              <span key={note}>{note}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
