// Central language registry + helpers.
// Each bundle (de/en/uk/ar) has the identical shape: { ui, chapters, cheatsheet }.
import de from './de.js';
import en from './en.js';
import uk from './uk.js';
import ar from './ar.js';

export const LANGS = [
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'uk', label: 'Українська', flag: '🇺🇦' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
];

// Languages that render right-to-left.
export const RTL = new Set(['ar']);

export const DEFAULT_LANG = 'de';

const BUNDLES = { de, en, uk, ar };

export function getBundle(lang) {
  return BUNDLES[lang] || de;
}

const LANG_STORAGE_KEY = 'strudel-kurs:lang';

export function loadLang() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && BUNDLES[saved]) return saved;
  } catch {
    /* private mode – ignore */
  }
  return DEFAULT_LANG;
}

export function saveLang(lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
}

// Reflect the active language on <html> so the browser sets text direction and
// screen readers announce the right language.
export function applyDir(lang) {
  const el = document.documentElement;
  el.setAttribute('lang', lang);
  el.setAttribute('dir', RTL.has(lang) ? 'rtl' : 'ltr');
}
