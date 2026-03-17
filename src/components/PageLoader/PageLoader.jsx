import { useState, useEffect } from 'react';
import './PageLoader.css';

const C = 160, G = 20;
const SIZE = C * 3 + G * 2; // 520

const TILES = [
  { id: 't1', x: 0,         y: 0,         w: C,     h: C },
  { id: 't2', x: C + G,     y: 0,         w: C*2+G, h: C },
  { id: 't3', x: 0,         y: C + G,     w: C,     h: C },
  { id: 't4', x: C + G,     y: C + G,     w: C,     h: C, spin: true },
  { id: 't5', x: C*2 + G*2, y: C + G,     w: C,     h: C },
  { id: 't6', x: 0,         y: C*2 + G*2, w: C,     h: C },
  { id: 't7', x: C + G,     y: C*2 + G*2, w: C*2+G, h: C },
];

export default function PageLoader() {
  // phase: 'loading' → 'exit' → 'done'
  const [phase, setPhase] = useState('loading');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('exit'), 800);
    const t2 = setTimeout(() => setPhase('done'), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={`page-loader${phase === 'exit' ? ' page-loader--exit' : ''}`}>

      {phase === 'loading' && (
        <div className="pl-grid" style={{ width: SIZE, height: SIZE }}>
          {TILES.map(tile => (
            <div
              key={tile.id}
              className={`pl-tile${tile.spin ? ' pl-tile--spin' : ''}`}
              style={{
                left:   tile.x,
                top:    tile.y,
                width:  tile.w,
                height: tile.h,
              }}
            />
          ))}
        </div>
      )}

      {phase === 'exit' && (
        <div className="pl-expanding-tile" />
      )}

    </div>
  );
}
