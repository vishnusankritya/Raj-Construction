import React from 'react'

export default function StatsBand({ stats }) {
  return (
    <section className="stats-band">
      <div className="shell stats-grid">
        {stats.map((stat) => (
          <article key={stat.label}>
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
