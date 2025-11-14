import React from 'react'

export default function ApproachSection({ differentiators, toolkit }) {
  return (
    <section id="approach" className="section shell split">
      <div className="section-content">
        <p className="eyebrow">How we work</p>
        <h3>Precision frameworks and client-first rituals.</h3>
        <p>
          We choreograph design, procurement, and execution using milestone-based governance so you always know what is complete, what is
          next, and how we de-risk.
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
          {toolkit.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
