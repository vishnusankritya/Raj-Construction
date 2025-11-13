import React from 'react'

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="section shell">
      <div className="section-head">
        <p className="eyebrow">Select deliveries</p>
        <h3>Projects that showcase our craft.</h3>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <p className="project-label">{project.location}</p>
            <h4>{project.name}</h4>
            <p className="project-scope">{project.scope}</p>
            <p>{project.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
