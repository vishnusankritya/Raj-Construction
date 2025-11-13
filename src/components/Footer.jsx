import React from 'react'

export default function Footer({ year }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <p>© {year} Raj Construction. All rights reserved.</p>
        <p>Licensed contractors · ISO 9001 · ISO 45001</p>
      </div>
    </footer>
  )
}
