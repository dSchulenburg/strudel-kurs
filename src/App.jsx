import { useEffect, useState } from 'react';
import { chapters, cheatsheet } from './data/chapters.js';
import StrudelEditor from './components/StrudelEditor.jsx';
import { useRoute, navigate } from './lib/router.js';

const STORAGE_KEY = 'strudel-kurs:besucht';

function loadVisited() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
  } catch {
    return new Set();
  }
}

export default function App() {
  const route = useRoute();
  const [visited, setVisited] = useState(loadVisited);

  const markVisited = (id) => {
    setVisited((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      } catch {
        /* private mode – ignore */
      }
      return next;
    });
  };

  if (route.view === 'chapter') {
    const index = chapters.findIndex((c) => c.id === route.id);
    if (index === -1) return <Home visited={visited} />;
    return (
      <Chapter
        chapter={chapters[index]}
        index={index}
        onVisit={markVisited}
      />
    );
  }
  return <Home visited={visited} />;
}

function Home({ visited }) {
  const doneCount = chapters.filter((c) => visited.has(c.id)).length;
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-badge">🎧 Musik &amp; Code</div>
        <h1>Programmieren lernen – mit Musik</h1>
        <p className="hero-sub">
          Mach im Browser deine eigene Musik. Nebenbei lernst du, wie Programmieren
          funktioniert. Kein Vorwissen nötig. In einfacher Sprache, Schritt für Schritt.
        </p>
        <button className="btn btn-big" onClick={() => navigate('/kapitel/erster-beat')}>
          ▶ Los geht’s
        </button>
        {doneCount > 0 && (
          <p className="hero-progress">
            Du hast {doneCount} von {chapters.length} Kapiteln geöffnet.
          </p>
        )}
      </header>

      <section className="callout">
        <strong>So funktioniert es:</strong> In jedem Kapitel steht ein kleiner Code.
        Klicke auf <span className="kbd-inline">▶ Abspielen</span> und höre zu. Dann ändere
        den Code und höre, was passiert. Du kannst nichts kaputt machen.
      </section>

      <section>
        <h2 className="section-title">Kapitel</h2>
        <div className="grid">
          {chapters.map((c, i) => (
            <button
              key={c.id}
              className="card"
              onClick={() => navigate(`/kapitel/${c.id}`)}
            >
              <div className="card-top">
                <span className="card-emoji">{c.emoji}</span>
                {visited.has(c.id) && <span className="card-check" title="besucht">✓</span>}
              </div>
              <div className="card-num">Kapitel {i + 1}</div>
              <div className="card-title">{c.title}</div>
              <div className="card-concept">{c.concept}</div>
            </button>
          ))}
        </div>
      </section>

      <section className="cheat">
        <h2 className="section-title">Spickzettel</h2>
        <p className="muted">Die wichtigsten Bausteine auf einen Blick:</p>
        <div className="cheat-grid">
          {cheatsheet.map((row) => (
            <div className="cheat-row" key={row.code}>
              <code>{row.code}</code>
              <span>{row.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="foot">
        Gebaut mit <a href="https://strudel.cc" target="_blank" rel="noreferrer">Strudel</a>{' '}
        · Ein Lernmodul von Dirk Schulenburg
      </footer>
    </div>
  );
}

function Chapter({ chapter, index, onVisit }) {
  useEffect(() => {
    onVisit(chapter.id);
  }, [chapter.id, onVisit]);

  const prev = chapters[index - 1];
  const next = chapters[index + 1];

  return (
    <div className="page">
      <nav className="topnav">
        <button className="link" onClick={() => navigate('/')}>← Übersicht</button>
        <span className="topnav-count">
          Kapitel {index + 1} / {chapters.length}
        </span>
      </nav>

      <header className="chapter-head">
        <span className="chapter-emoji">{chapter.emoji}</span>
        <div>
          <div className="chapter-concept-tag">{chapter.concept}</div>
          <h1>{chapter.title}</h1>
        </div>
      </header>

      <section className="prose">
        {chapter.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      <section className="bridge">
        <div className="bridge-col bridge-music">
          <div className="bridge-label">🎵 In der Musik</div>
          <p>{chapter.bridge.music}</p>
        </div>
        <div className="bridge-arrow">↔</div>
        <div className="bridge-col bridge-code">
          <div className="bridge-label">💻 Beim Programmieren</div>
          <p>{chapter.bridge.code}</p>
        </div>
      </section>

      {chapter.editors.map((ed, i) => (
        <StrudelEditor key={`${chapter.id}-${i}`} code={ed.code} />
      ))}

      <section className="tasks">
        <h2>✏️ Probier das</h2>
        <ol>
          {chapter.tasks.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ol>
      </section>

      {chapter.tip && (
        <section className="tip">
          <span className="tip-icon">💡</span>
          <p>{chapter.tip}</p>
        </section>
      )}

      <nav className="chapter-nav">
        {prev ? (
          <button className="btn btn-ghost" onClick={() => navigate(`/kapitel/${prev.id}`)}>
            ← {prev.title}
          </button>
        ) : (
          <span />
        )}
        {next ? (
          <button className="btn" onClick={() => navigate(`/kapitel/${next.id}`)}>
            {next.title} →
          </button>
        ) : (
          <button className="btn" onClick={() => navigate('/')}>
            Fertig! Zur Übersicht ✓
          </button>
        )}
      </nav>
    </div>
  );
}
