import React, { useState } from 'react'
import { useHeaderCollapse } from '../hooks/useHeaderCollapse'

export default function Header({ brandTagline, owner, phone, email, navigation }) {
  const { isCondensed, headerRef } = useHeaderCollapse()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerClass = ['site-header']

  if (isCondensed) {
    headerClass.push('site-header--condensed')
  }
  if (isMenuOpen) {
    headerClass.push('site-header--menu-open')
  }

  return (
    <header ref={headerRef} className={headerClass.join(' ')}>
      <div className="header-grid">
        <div className="header-intro">
          <h1 className="brand" aria-live="polite">
            Raj Constructions
          </h1>
          <p className="eyebrow header-tagline">{brandTagline}</p>
        </div>
        <div className="nav-container">
          <nav className="nav" aria-label="Primary navigation">
            {navigation.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="hamburger"></span>
        </button>
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
