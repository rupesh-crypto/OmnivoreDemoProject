import React, { useRef } from 'react';
import './OurInvestments.css';

const companies = [
  'Arya.ag',
  'ayekart',
  'DeHaat',
  'ecozen',
  'Farmley',
  'Varah',
  'Ninjacart',
  'Stellapps',
  'Bijak',
];

const OurInvestments = () => {
  const inputRef = useRef(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = inputRef.current?.value?.trim();
    if (email) {
      // Placeholder: hook up real submission logic here
      alert(`Subscribed: ${email}`);
      inputRef.current.value = '';
    }
  };

  return (
    <section className="our-investments">
      {/* Decorative blobs */}
      <div className="oi-blobs" aria-hidden="true">
        <div className="oi-blob" />
        <div className="oi-blob" />
        <div className="oi-blob" />
        <div className="oi-blob" />
      </div>

      {/* Top row */}
      <div className="oi-top-row">
        <h2 className="oi-title">Our investments</h2>
        <a href="#portfolio" className="oi-view-portfolio">
          View Portfolio
          <svg className="oi-portfolio-arrow" width="40" height="16" viewBox="0 0 52 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10H46M46 10L37 2M46 10L37 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Marquee */}
      <div className="oi-marquee-wrapper" aria-label="Portfolio companies">
        <div className="oi-marquee-track">
          {/* Render list twice for seamless loop */}
          {[0, 1].map((setIndex) => (
            <ul key={setIndex} className="oi-marquee-list" aria-hidden={setIndex === 1}>
              {companies.map((company) => (
                <li key={`${setIndex}-${company}`}>{company}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Newsletter bar */}
      <div className="oi-newsletter-bar">
        <p className="oi-newsletter-title">Subscribe to our newsletter</p>
        <form className="oi-newsletter-form" onSubmit={handleSubscribe}>
          <input
            ref={inputRef}
            type="email"
            className="oi-newsletter-input"
            placeholder="Enter your email ID"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="oi-newsletter-arrow"
            aria-label="Subscribe"
          >
            →
          </button>
        </form>
      </div>
    </section>
  );
};

export default OurInvestments;
