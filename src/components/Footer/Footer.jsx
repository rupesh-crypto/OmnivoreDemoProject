import React from 'react';
import './Footer.css';

const navCol1 = ['Our Investments', 'Our Team', 'Our Impact', 'Spotlight'];
const navCol2 = ['Jobs', 'Contact Us'];
const legalLinks = [
  'AIF Registration Details',
  'Responsible Investing',
  'Complaints Mechanism',
  'Privacy Policy',
  'POSH Policy',
];

function OmnivoreLogoIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
      <circle cx="19" cy="19" r="19" fill="#1a9e80" />
      <ellipse cx="14" cy="19" rx="7" ry="10" fill="#0d5c44" />
      <ellipse cx="24" cy="19" rx="7" ry="10" fill="#2ec4a0" />
      <ellipse cx="19" cy="19" rx="5" ry="9" fill="#1a9e80" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconYouTube() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function IconMedium() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">

      {/* Partner logos strip */}
      <div className="footer-partners">
        <div className="footer-partner">
          <span className="footer-partner-label">Signatory of:</span>
          <div className="footer-partner-logo footer-partner-pri">
            <div className="pri-icon">
              <span className="pri-grid">
                {[...Array(9)].map((_, i) => <span key={i} className="pri-cell" />)}
              </span>
            </div>
            <div className="pri-text">
              <strong>PRI</strong>
              <small>Principles for<br />Responsible Investment</small>
            </div>
          </div>
        </div>

        <div className="footer-partner">
          <div className="footer-partner-logo footer-partner-bluemark">
            <div className="bluemark-circle">
              <span>BLUE</span>
              <span>MARK</span>
            </div>
          </div>
        </div>

        <div className="footer-partner">
          <div className="footer-partner-logo footer-partner-ia50">
            <div className="ia50-badge">
              <span className="ia50-top">IA 50®</span>
              <span className="ia50-year">2025</span>
              <span className="ia50-bottom">MANAGER</span>
            </div>
          </div>
        </div>

        <div className="footer-partner">
          <span className="footer-partner-label">Signatory to:</span>
          <div className="footer-partner-logo footer-partner-opim">
            <div className="opim-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="28" r="3" fill="#f5a623" />
                <path d="M16 25 L16 12" stroke="#f5a623" strokeWidth="2" />
                <path d="M16 18 Q8 14 10 6" stroke="#f5a623" strokeWidth="1.5" fill="none" />
                <path d="M16 18 Q24 14 22 6" stroke="#f5a623" strokeWidth="1.5" fill="none" />
                <path d="M16 15 Q11 11 13 4" stroke="#f5a623" strokeWidth="1.2" fill="none" />
                <path d="M16 15 Q21 11 19 4" stroke="#f5a623" strokeWidth="1.2" fill="none" />
              </svg>
            </div>
            <div className="opim-text">
              <strong>Operating Principles for<br />Impact Management</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <OmnivoreLogoIcon />
            <span className="footer-logo-text">omnivore</span>
          </div>
        </div>

        {/* Nav col 1 */}
        <nav className="footer-nav-col">
          <ul>
            {navCol1.map(label => (
              <li key={label}><a href="#">{label}</a></li>
            ))}
          </ul>
        </nav>

        {/* Nav col 2 */}
        <nav className="footer-nav-col">
          <ul>
            {navCol2.map(label => (
              <li key={label}><a href="#">{label}</a></li>
            ))}
          </ul>
        </nav>

        {/* Legal + social */}
        <div className="footer-right-col">
          <ul className="footer-legal">
            {legalLinks.map(label => (
              <li key={label}><a href="#">{label}</a></li>
            ))}
          </ul>
          <div className="footer-social">
            <div className="footer-social-row">
              <a href="#" className="footer-social-icon"><IconX /></a>
              <a href="#" className="footer-social-icon"><IconLinkedIn /></a>
              <a href="#" className="footer-social-icon"><IconYouTube /></a>
            </div>
            <div className="footer-social-row">
              <a href="#" className="footer-social-icon"><IconInstagram /></a>
              <a href="#" className="footer-social-icon"><IconMedium /></a>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p className="footer-copy">© 2022 Omnivore Capital Management Advisors Pvt Ltd</p>
      </div>

    </footer>
  );
}
