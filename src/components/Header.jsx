import React from 'react'

export default function Header({ brandTagline, owner, phone, email, navigation }) {
  return (
    <header className="site-header">
      <div className="shell header-grid">
        <div>
          <p className="eyebrow">Raj Construction · Led by {owner}</p>
          <h1 className="brand">{brandTagline}</h1>
        </div>
        <nav className="nav" aria-label="Primary navigation">
          {navigation.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-cta">
          <a className="pill" href={`tel:${phone.replace(/\s/g, '')}`}>
            {phone}
          </a>
          <a className="link" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      </div>
    </header>
  )
}
