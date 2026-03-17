import React from 'react';
import './WhereWeInvest.css';

/* ── Inline SVG icons ── */

const BowlIcon = () => (
  <svg
    className="wwi-card-icon"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 14c0 5.523 4.477 10 10 10s10-4.477 10-10H4Z"
      fill="rgba(255,255,255,0.9)"
    />
    <path
      d="M3 14h22"
      stroke="rgba(255,255,255,0.9)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M10 8c0-2 1.5-3 4-3s4 1 4 3"
      stroke="rgba(255,255,255,0.9)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const LeafIcon = () => (
  <svg
    className="wwi-card-icon"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6 22c2-8 8-14 16-16C22 14 16 20 6 22Z"
      fill="rgba(255,255,255,0.9)"
    />
    <path
      d="M6 22L14 14"
      stroke="rgba(255,255,255,0.9)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const TrendUpIcon = () => (
  <svg
    className="wwi-card-icon"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <polyline
      points="3,19 10,11 16,15 25,6"
      stroke="rgba(255,255,255,0.9)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polyline
      points="18,6 25,6 25,13"
      stroke="rgba(255,255,255,0.9)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const HouseIcon = () => (
  <svg
    className="wwi-card-icon"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M3 13L14 4l11 9"
      stroke="rgba(255,255,255,0.9)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 11v11h5v-6h6v6h5V11"
      stroke="rgba(255,255,255,0.9)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

/* ── Card data ── */
const cards = [
  {
    id: 'food',
    modifier: 'wwi-card--food',
    Icon: BowlIcon,
    title: 'Food Security',
    desc: 'Disruptive value-chain innovations that ensure equitable & reliable supply of safe, fresh, and nutritious food for rural & urban households.',
  },
  {
    id: 'agri',
    modifier: 'wwi-card--agri',
    Icon: LeafIcon,
    title: 'Agricultural Prosperity',
    desc: 'Regenerative agri-food systems that boost farmer incomes, enhance sustainability, and create lasting economic value for smallholders.',
  },
  {
    id: 'resource',
    modifier: 'wwi-card--resource',
    Icon: TrendUpIcon,
    title: 'Resource Efficiency',
    desc: 'Climate tech that optimizes natural resource use, lowers environmental impact, and drives sustainable growth across industries.',
  },
  {
    id: 'rural',
    modifier: 'wwi-card--rural',
    Icon: HouseIcon,
    title: 'Rural Resilience',
    desc: 'Solutions that expand access to products, services, and livelihoods, accelerating inclusive growth in underserved communities.',
  },
];

/* ── Component ── */
const WhereWeInvest = () => {
  return (
    <section className="where-we-invest">
      {/* Header */}
      <div className="wwi-header">
        <h2 className="wwi-title">Where we invest</h2>
        <p className="wwi-subtitle">
          Pioneering agritech &amp; climate smart VC investing in India
        </p>
      </div>

      {/* Cards */}
      <div className="wwi-cards">
        {cards.map(({ id, modifier, Icon, title, desc }) => (
          <div key={id} className={`wwi-card ${modifier}`}>
            <div className="wwi-card-header">
              <Icon />
              <h3 className="wwi-card-title">{title}</h3>
            </div>
            <p className="wwi-card-desc">{desc}</p>
          </div>
        ))}
      </div>

      {/* Investor Bar */}
      <div className="wwi-investor-bar">
        <p className="wwi-investor-text">Already an investor with us</p>
        <a href="#investor-login" className="wwi-investor-btn">
          <span className="wwi-btn-circle" />
          <span className="wwi-btn-content">
            Investor login
            <span className="wwi-btn-arrow">
              <svg className="wwi-arrow-svg" width="40" height="16" viewBox="0 0 52 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10H46M46 10L37 2M46 10L37 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default WhereWeInvest;
