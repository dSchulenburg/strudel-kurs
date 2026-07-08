import { useEffect, useState } from 'react';

/** Minimal hash router (no dependency).
 *   #/                  -> home
 *   #/kapitel/<id>      -> one chapter
 */
export function parseHash(hash) {
  const clean = (hash || '').replace(/^#\/?/, '');
  const [path, param] = clean.split('/');
  if (path === 'kapitel' && param) return { view: 'chapter', id: param };
  return { view: 'home' };
}

export function navigate(path) {
  window.location.hash = path.startsWith('#') ? path : `#${path}`;
  window.scrollTo({ top: 0 });
}

export function useRoute() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));
  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}
