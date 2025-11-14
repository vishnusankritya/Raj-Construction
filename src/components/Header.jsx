import React from 'react'
import { useHeaderCollapse } from '../hooks/useHeaderCollapse'

export default function Header({ brandTagline, owner, phone, email, navigation }) {
  const { isCondensed, headerRef } = useHeaderCollapse()
  const headerClass = ['site-header']
  
  if (isCondensed) {
    headerClass.push('site-header--condensed')
  }

  return (
    <header ref={headerRef} className={headerClass.join(' ')}>
      <div className="shell header-grid">
        <div className="header-intro">
          <h1 className="brand" aria-live="polite">
            Raj Constructions
          </h1>
          <p className="eyebrow header-tagline">{brandTagline}</p>
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
