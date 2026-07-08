import { useEffect, useState } from 'react';
import { chapterMeta, cheatsheetCodes } from './data/chapters.js';
import { LANGS, getBundle, loadLang, saveLang, applyDir } from './i18n/index.js';
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

// Tiny placeholder interpolation: format('Frage {a} von {b}', {a:1,b:9}).
function format(str, vars) {
  return String(str).replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
}

export default function App() {
  const route = useRoute();
  const [visited, setVisited] = useState(loadVisited);
  const [lang, setLang] = useState(loadLang);

  useEffect(() => {
    applyDir(lang);
    saveLang(lang);
  }, [lang]);

  const bundle = getBundle(lang);
  const ui = bundle.ui;
  const chapters = chapterMeta.map((m) => ({ ...m, ...bundle.chapters[m.id] }));
  const cheatsheet = cheatsheetCodes.map((c) => ({ code: c.code, desc: bundle.cheatsheet[c.id] }));

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

  const switcher = <LangSwitcher lang={lang} setLang={setLang} label={ui.langLabel} />;

  if (route.view === 'chapter') {
    const index = chapters.findIndex((c) => c.id === route.id);
    if (index !== -1) {
      return (
        <Chapter
          chapters={chapters}
          chapter={chapters[index]}
          index={index}
          ui={ui}
          onVisit={markVisited}
          switcher={switcher}
        />
      );
    }
  }
  return (
    <Home
      chapters={chapters}
      cheatsheet={cheatsheet}
      ui={ui}
      visited={visited}
      switcher={switcher}
    />
  );
}

function LangSwitcher({ lang, setLang, label }) {
  return (
    <div className="lang-switcher">
      <span className="lang-globe" aria-hidden="true">🌐</span>
      <select
        className="lang-select"
        value={lang}
        aria-label={label}
        onChange={(e) => setLang(e.target.value)}
      >
        {LANGS.map((l) => (
          <option key={l.code} value={l.code}>
            {l.flag} {l.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function Home({ chapters, cheatsheet, ui, visited, switcher }) {
  const doneCount = chapters.filter((c) => visited.has(c.id)).length;
  return (
    <div className="page">
      <div className="topbar">{switcher}</div>

      <header className="hero">
        <div className="hero-badge">🎧 {ui.brandBadge}</div>
        <h1>{ui.homeTitle}</h1>
        <p className="hero-sub">{ui.homeSub}</p>
        <button className="btn btn-big" onClick={() => navigate('/kapitel/erster-beat')}>
          ▶ {ui.start}
        </button>
        {doneCount > 0 && (
          <p className="hero-progress">
            {format(ui.progress, { done: doneCount, total: chapters.length })}
          </p>
        )}
      </header>

      <section className="callout">
        <strong>{ui.howtoLabel}</strong> {ui.howto}
      </section>

      <section>
        <h2 className="section-title">{ui.chaptersHeading}</h2>
        <div className="grid">
          {chapters.map((c, i) => (
            <button key={c.id} className="card" onClick={() => navigate(`/kapitel/${c.id}`)}>
              <div className="card-top">
                <span className="card-emoji">{c.emoji}</span>
                {visited.has(c.id) && (
                  <span className="card-check" title={ui.visited}>
                    ✓
                  </span>
                )}
              </div>
              <div className="card-num">{format(ui.chapterLabel, { n: i + 1 })}</div>
              <div className="card-title">{c.title}</div>
              <div className="card-concept">{c.concept}</div>
            </button>
          ))}
        </div>
      </section>

      <section className="cheat">
        <h2 className="section-title">{ui.cheatsheetHeading}</h2>
        <p className="muted">{ui.cheatsheetSub}</p>
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
        {ui.footerPre}{' '}
        <a href="https://strudel.cc" target="_blank" rel="noreferrer">
          {ui.footerLink}
        </a>{' '}
        {ui.footerPost}
      </footer>
    </div>
  );
}

function Chapter({ chapters, chapter, index, ui, onVisit, switcher }) {
  useEffect(() => {
    onVisit(chapter.id);
  }, [chapter.id, onVisit]);

  const prev = chapters[index - 1];
  const next = chapters[index + 1];

  return (
    <div className="page">
      <nav className="topnav">
        <button className="link" onClick={() => navigate('/')}>
          ← {ui.overview}
        </button>
        <span className="topnav-count">
          {format(ui.chapterOf, { a: index + 1, b: chapters.length })}
        </span>
        {switcher}
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
          <div className="bridge-label">🎵 {ui.musicLabel}</div>
          <p>{chapter.bridge.music}</p>
        </div>
        <div className="bridge-arrow">↔</div>
        <div className="bridge-col bridge-code">
          <div className="bridge-label">💻 {ui.codeLabel}</div>
          <p>{chapter.bridge.code}</p>
        </div>
      </section>

      {chapter.editors.map((ed, i) => (
        <StrudelEditor key={`${chapter.id}-${i}`} code={ed.code} ui={ui} />
      ))}

      <section className="tasks">
        <h2>✏️ {ui.tryThis}</h2>
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
            {ui.finish} ✓
          </button>
        )}
      </nav>
    </div>
  );
}
