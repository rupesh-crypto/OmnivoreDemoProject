import { useState, useEffect } from 'react';
import './Spotlight.css';

const IMG = 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&q=80';

const articles = [
  { id: 1,  title: "India's Varaha bags $20M to scale carbon removal from the Global South",         category: 'News',     date: 'Feb 2026', active: false },
  { id: 2,  title: 'Omnivore Achieves Platinum Rating from BlueMark',                                category: 'News',     date: 'Sep 2025', active: true  },
  { id: 3,  title: 'Can altM Engineer A Cleantech Revolution In The Industrial Value Chain?',        category: 'Articles', date: 'Jun 2025', active: false },
  { id: 4,  title: 'Snack brand Farmley raises $40 million in funding led by L Catterton',          category: 'News',     date: 'Mar 2025', active: false },
  { id: 5,  title: 'How Omnivore portfolio company Eruvaka is transforming aquaculture with AI',     category: 'Articles', date: 'Jan 2025', active: false },
  { id: 6,  title: 'DeHaat raises $60M Series E to expand its agri services platform',              category: 'News',     date: 'Nov 2024', active: false },
  { id: 7,  title: 'The case for investing in climate-smart agriculture in South Asia',              category: 'Articles', date: 'Oct 2024', active: false },
  { id: 8,  title: 'Omnivore backs SatSure to scale precision agriculture analytics',               category: 'News',     date: 'Aug 2024', active: false },
  { id: 9,  title: "India's agri-fintech boom: opportunities and risks for smallholder farmers",    category: 'Articles', date: 'Jul 2024', active: false },
  { id: 10, title: 'Gramophone crosses 1M farmer milestone on its digital advisory platform',       category: 'News',     date: 'Jun 2024', active: false },
  { id: 11, title: 'Why rural cold-chain infrastructure is the next big bet in agri-tech',          category: 'Articles', date: 'May 2024', active: false },
  { id: 12, title: 'Omnivore closes Fund III at $150M to double down on agri-tech',                 category: 'News',     date: 'Apr 2024', active: false },
  { id: 13, title: 'From field to fork: traceability technology and the premium food market',       category: 'Articles', date: 'Mar 2024', active: false },
  { id: 14, title: 'WayCool raises Series D to strengthen its farm-to-retail supply chain',         category: 'News',     date: 'Feb 2024', active: false },
  { id: 15, title: 'The untapped potential of soil health monitoring for Indian farmers',            category: 'Articles', date: 'Jan 2024', active: false },
  { id: 16, title: 'Intello Labs secures $8M to scale AI-powered produce quality inspection',       category: 'News',     date: 'Dec 2023', active: false },
  { id: 17, title: 'How digital credit is reshaping rural finance in emerging markets',             category: 'Articles', date: 'Nov 2023', active: false },
  { id: 18, title: 'Omnivore portfolio report: impact metrics across Fund I and Fund II',           category: 'Articles', date: 'Oct 2023', active: false },
  { id: 19, title: 'Otipy expands its social commerce model to three new states',                   category: 'News',     date: 'Sep 2023', active: false },
  { id: 20, title: 'Regenerative agriculture: the investment thesis taking root in India',          category: 'Articles', date: 'Aug 2023', active: false },
];

function getGridParams() {
  if (typeof window === 'undefined') return { G: 195, GAP: 12 };
  const w = window.innerWidth;
  if (w <= 900) {
    // Available width = viewport - section horizontal padding (40px total)
    const available = w - 40;
    // 3 tiles + 2 gaps; use 8px gap on mobile
    const gap = 8;
    const g = Math.max(Math.floor((available - gap * 2) / 3), 72);
    return { G: g, GAP: gap };
  }
  if (w <= 1200) return { G: 155, GAP: 10 };
  return { G: 195, GAP: 12 };
}

function buildTiles(G, GAP) {
  const r = Math.round(G * 0.36); // proportional corner radius (~70px at G=195)
  return [
    { id: 't1', col: '1',     row: '1', x: 0,             y: 0,             radius: '50%' },
    { id: 't2', col: '2 / 4', row: '1', x: G + GAP,       y: 0,             radius: `0 ${r}px ${r}px ${r}px` },
    { id: 't3', col: '1',     row: '2', x: 0,             y: G + GAP,       radius: `${r}px 0 ${r}px ${r}px` },
    { id: 't4', col: '2',     row: '2', x: G + GAP,       y: G + GAP,       radius: '50%' },
    { id: 't5', col: '3',     row: '2', x: (G + GAP) * 2, y: G + GAP,       radius: `0 ${r}px ${r}px ${r}px` },
    { id: 't6', col: '1 / 3', row: '3', x: 0,             y: (G + GAP) * 2, radius: `${r}px 0 ${r}px ${r}px` },
    { id: 't7', col: '3',     row: '3', x: (G + GAP) * 2, y: (G + GAP) * 2, radius: `0 ${r}px ${r}px ${r}px` },
  ];
}

function ArticleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="1" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 4.5h7M3.5 7h7M3.5 9.5h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export default function Spotlight() {
  const [{ G, GAP }, setGrid] = useState(getGridParams);

  useEffect(() => {
    const update = () => setGrid(getGridParams());
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const GRID_SIZE = G * 3 + GAP * 2;
  const tiles = buildTiles(G, GAP);

  return (
    <section className="spotlight">
      {/* Left: Image Grid */}
      <div className="sp-grid-wrap">
        <div
          className="sp-grid"
          style={{
            gridTemplateColumns: `${G}px ${G}px ${G}px`,
            gridTemplateRows: `${G}px ${G}px ${G}px`,
            gap: `${GAP}px`,
          }}
        >
          {tiles.map(t => (
            <div
              key={t.id}
              className="sp-tile"
              style={{
                gridColumn: t.col,
                gridRow: t.row,
                borderRadius: t.radius,
                backgroundImage: `url(${IMG})`,
                backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
                backgroundPosition: `-${t.x}px -${t.y}px`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Right: Articles */}
      <div className="sp-content">
        <div className="sp-header">
          <h2 className="sp-title">Spotlight</h2>
          <a href="#spotlight" className="sp-view-more">
            View more <span className="sp-arrow">→</span>
          </a>
        </div>

        <div className="sp-articles">
          {articles.map(a => (
            <a key={a.id} href="#" className="sp-article">
              <div className="sp-article-body">
                <p className="sp-article-title">{a.title}</p>
                <div className="sp-article-meta">
                  <span className="sp-meta-icon"><ArticleIcon /></span>
                  <span className="sp-meta-category">{a.category}</span>
                  <span className="sp-meta-dot">·</span>
                  <span className="sp-meta-date">{a.date}</span>
                </div>
              </div>
              <span className="sp-article-arrow" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
