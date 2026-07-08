// Loads the Strudel REPL web component (<strudel-editor>) exactly once.
//
// @strudel/repl@1.3.0 ships a self-registering browser bundle at dist/index.js.
// unpkg's bare URL resolves to it, and the bundle calls
// customElements.define('strudel-editor', ...) on load. We pin the version so a
// future breaking release can't silently change behaviour under our learners.
const STRUDEL_SRC = 'https://unpkg.com/@strudel/repl@1.3.0';

let loadPromise = null;

export function loadStrudel() {
  if (loadPromise) return loadPromise;

  // Already defined (e.g. hot reload) -> nothing to do.
  if (typeof customElements !== 'undefined' && customElements.get('strudel-editor')) {
    loadPromise = Promise.resolve();
    return loadPromise;
  }

  loadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${STRUDEL_SRC}"]`);
    if (existing) {
      // Someone injected it already; wait for the element definition.
      customElements.whenDefined('strudel-editor').then(resolve, reject);
      return;
    }
    const script = document.createElement('script');
    script.src = STRUDEL_SRC;
    script.async = true;
    script.onload = () => customElements.whenDefined('strudel-editor').then(resolve, reject);
    script.onerror = () => reject(new Error('Strudel konnte nicht geladen werden (Internet?).'));
    document.head.appendChild(script);
  });

  return loadPromise;
}
