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
          <div className="project-card" key={project.name}>
            <div className="project-photo">
              {project.photo ? (
                <img src={project.photo} alt={project.name + ' photo'} />
              ) : (
                <div className="project-photo--placeholder" />
              )}
            </div>
            <div className="project-details">
              <p className="project-label">{project.location}</p>
              <h4>{project.name}</h4>
              <p className="project-scope">{project.scope}</p>
              <p>{project.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
