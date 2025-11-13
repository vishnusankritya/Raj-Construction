import React from 'react'

export default function Header({ brandTagline, owner, phone, email, navigation, isCondensed }) {
  const headerClass = ['site-header']
  if (isCondensed) headerClass.push('site-header--condensed')
  const brandText = isCondensed ? 'Raj Construction' : brandTagline

  return (
    <header className={headerClass.join(' ')}>
      <div className="shell header-grid">
        <div className="header-intro">
          <p className="eyebrow header-tagline">Raj Constructions </p>
          <h1 className="brand" aria-live="polite">
            {brandText}
          </h1>
        </div>
        <nav className="nav" aria-label="Primary navigation">
          {navigation.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        {/* <div className="header-cta">
          <a className="pill" href={`tel:${phone.replace(/\s/g, '')}`}>
            {phone}
          </a>
          <a className="link" href={`mailto:${email}`}>
            {email}
          </a>
        </div> */}
      </div>
    </header>
  )
}
