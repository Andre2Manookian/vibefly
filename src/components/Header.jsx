import React from 'react'
import plane from '../assets/plane.svg'

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <a href="#top" className="brand-logo" aria-label="VibeFly Home">
          <span className="logo-mark">
            <img src={plane} alt="Plane" className="logo-plane" />
          </span>
          <span className="logo-text">VibeFly</span>
        </a>
        <nav className="nav-actions">
          <a
            className="btn small primary"
            href="https://tp.media/click?shmarker=670432&promo_id=8978&source_type=link&type=click&campaign_id=629&trs=456587"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get eSIM worldwide
          </a>
        </nav>
      </div>
    </header>
  )
}