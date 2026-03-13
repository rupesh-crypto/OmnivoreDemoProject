import React, { useEffect, useRef, useState } from 'react';
import './OurImpact.css';

const stats = [
  {
    id: 'farmers',
    number: '17',
    unit: 'Million',
    label: 'Farmers reached',
  },
  {
    id: 'ghg',
    number: '3.14',
    unit: 'Million MT',
    label: 'GHG emissions avoided',
  },
  {
    id: 'economic',
    number: '$5.43',
    unit: 'Billion',
    label: 'Economic value created for smallholder farmers',
  },
  {
    id: 'area',
    number: '20.91',
    unit: 'Million ha',
    label: 'Area under sustainable cultivation',
  },
];

function parseNumber(str) {
  const prefix = str.startsWith('$') ? '$' : '';
  const raw = str.replace('$', '');
  const decimals = raw.includes('.') ? raw.split('.')[1].length : 0;
  return { prefix, target: parseFloat(raw), decimals };
}

function useCountUp(target, decimals, duration = 2000, started) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, decimals, duration]);

  return value;
}

function StatItem({ stat, started }) {
  const { prefix, target, decimals } = parseNumber(stat.number);
  const value = useCountUp(target, decimals, 2000, started);
  const display = `${prefix}${value.toFixed(decimals)}`;

  return (
    <div className="oi-impact-stat">
      <div className="oi-impact-stat-number-row">
        <span className="oi-impact-stat-number">{display}</span>
        <span className="oi-impact-stat-unit">{stat.unit}</span>
      </div>
      <p className="oi-impact-stat-label">{stat.label}</p>
    </div>
  );
}

const OurImpact = () => {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="our-impact" ref={sectionRef}>

      {/* Top row */}
      <div className="oi-impact-top-row">
        <h2 className="oi-impact-title">Our Impact</h2>
        <a href="#impact" className="oi-impact-view-more">
          View More <span className="arrow">→</span>
        </a>
      </div>

      {/* Stats */}
      <div className="oi-impact-stats">
        {stats.map((stat) => (
          <StatItem key={stat.id} stat={stat} started={started} />
        ))}
      </div>
    </section>
  );
};

export default OurImpact;
