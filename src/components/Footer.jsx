import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="col">
          <h4>VibeFly</h4>
          <p>Find the cheapest flights worldwide.</p>
        </div>
        <div className="col">
          <h4>Contact</h4>
          <ul className="list">
            <li>Email: <a href="mailto:digitalvibe81@gmail.com">digitalvibe81@gmail.com</a></li>
            <li>Instagram: <a href="https://instagram.com/digitalvibe.am" target="_blank" rel="noopener noreferrer">@digitalvibe.am</a></li>
          </ul>
        </div>
        <div className="col">
          <h4>Partners</h4>
          <a
            className="btn small ghost"
            href="https://tp.media/click?shmarker=670432&promo_id=8978&source_type=link&type=click&campaign_id=629&trs=456587"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get eSIM worldwide
          </a>
        </div>
      </div>
      <div className="copyright">
        <small>
          © {new Date().getFullYear()} VibeFly. Developed and published by Digital Vibe — Founder Andre Manookian.
        </small>
      </div>
    </footer>
  )
}