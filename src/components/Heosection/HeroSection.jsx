import { useEffect, useState } from 'react'
import './HeroSection.css'

const navLinks = ['Investments', 'Team', 'Impact', 'Spotlight', 'Jobs']

/* ─────────────────────────────────────────────────────────────
   TILE CONFIG  ←  edit border-radius values here freely
   r: [top-left, top-right, bottom-right, bottom-left]  (px)
   Grid is 480×480 | 3 cols × 3 rows | 15px gaps | cell = 150px
   ───────────────────────────────────────────────────────────── */
const TILES = [
  { x: 0,   y: 0,   w: 150, h: 150, r: [75, 75,  0, 75] },   // T1
  { x: 165, y: 0,   w: 315, h: 150, r: [ 0, 60, 60, 60] },   // T2 — wide (merged T2+T3)
  { x: 0,   y: 165, w: 150, h: 150, r: [75,  0, 75, 75] },   // T3
  { x: 165, y: 165, w: 150, h: 150, r: [75, 75, 75, 75] },   // T4 — circle
  { x: 330, y: 165, w: 150, h: 150, r: [ 0, 75, 75, 75] },   // T5
  { x: 0,   y: 330, w: 150, h: 150, r: [75, 75,  0, 75] },   // T6
  { x: 165, y: 330, w: 315, h: 150, r: [ 0, 60, 60, 60] },   // T7 — wide
]

/**
 * Always emits the same 4× (L + Q) command structure per tile
 * so CSS can interpolate the `d` attribute between square ↔ organic.
 * When r=0 the Q is degenerate (straight line), visually a sharp corner.
 */
function tilePath(x, y, w, h, [tl, tr, br, bl]) {
  return [
    `M ${x + tl},${y}`,
    `L ${x + w - tr},${y} Q ${x + w},${y} ${x + w},${y + tr}`,
    `L ${x + w},${y + h - br} Q ${x + w},${y + h} ${x + w - br},${y + h}`,
    `L ${x + bl},${y + h} Q ${x},${y + h} ${x},${y + h - bl}`,
    `L ${x},${y + tl} Q ${x},${y} ${x + tl},${y} Z`,
  ].join(' ')
}

/** Builds the full evenodd stencil path: outer rect + all tile holes */
function buildStencil(tiles, useRadius = true) {
  const outer = 'M 0,0 H 480 V 480 H 0 Z'
  const holes = tiles
    .map(t => tilePath(t.x, t.y, t.w, t.h, useRadius ? t.r : [0, 0, 0, 0]))
    .join(' ')
  return `${outer} ${holes}`
}

export default function HeroSection() {
  const [morphed, setMorphed] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setMorphed(true), 1500)
    return () => clearTimeout(id)
  }, [])

  return (
    <section className="hero-section">

      {/* ── Navbar ── */}
      <nav className="hero-nav">
        <div className="hero-logo">
          <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#1b3d30" />
            <path d="M7 27 Q20 5 33 27" fill="#5cb87a" />
            <path d="M7 29 Q20 39 33 29" fill="#2e7d52" />
          </svg>
          <span>omnivore</span>
        </div>

        <div className="hero-nav-right">
          <ul className="hero-nav-links">
            {navLinks.map(link => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>

          <a href="#" className="hero-talk-btn">
            <span>Talk to us</span>
            <span className="talk-arrow">
              <span className="talk-arrow-line" />
              <span className="talk-arrow-head" />
            </span>
          </a>
        </div>

        <button className="hero-hamburger" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#1a2340" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      <hr className="hero-hr" />

      {/* ── Body ── */}
      <div className="hero-body">

        {/* Left */}
        <div className="hero-left">
          <h1 className="hero-heading">
            Supporting{' '}
            <span className="orange">visionary<br />founders</span>{' '}
            creating impact<br />
            at scale across<br />
            <span className="orange-italic">bharat</span>
          </h1>

          <a href="#" className="hero-pitch-btn">
            <span className="btn-content">
              Pitch to us
              <span className="btn-arrow">
                <span className="arrow-line" />
                <span className="arrow-head" />
              </span>
            </span>
          </a>
        </div>

        {/* Right — video + stencil driven by TILES config */}
        <div className="hero-right">
          <div className="grid-canvas">

            {/* Single YouTube video fills the background */}
            <iframe
              className="grid-yt"
              src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playlist=jfKfPfyJRdk"
              allow="autoplay; encrypted-media"
              title="grid-video"
            />

            {/* SVG stencil — paths auto-generated from TILES config above */}
            <svg
              className="grid-stencil"
              viewBox="0 0 480 480"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <path fillRule="evenodd" fill="#faf5ee" d={buildStencil(TILES, morphed)} />
            </svg>

          </div>
        </div>

      </div>
    </section>
  )
}
