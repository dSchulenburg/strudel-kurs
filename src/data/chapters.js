// Language-INDEPENDENT chapter skeleton.
// Only structural data lives here: id (used in routes), emoji and the Strudel
// code examples. All translatable text (title, concept, intro, bridge, tasks,
// tip) comes from the per-language bundles in src/i18n/<lang>.js, keyed by id.
//
// The code examples are deliberately NOT translated: s("bd hh sd") sounds the
// same in every language.

export const chapterMeta = [
  { id: 'erster-beat', emoji: '🥁', editors: [{ code: `s("bd hh sd hh")` }] },
  { id: 'text-string', emoji: '🔤', editors: [{ code: `s("bd cp bd cp")` }] },
  { id: 'liste-sequenz', emoji: '📋', editors: [{ code: `s("bd*2 hh*4 sd")` }] },
  { id: 'funktion', emoji: '🛠️', editors: [{ code: `note("c e g b")` }] },
  {
    id: 'variable',
    emoji: '🏷️',
    editors: [{ code: `let beat = "bd hh sd hh"\n\ns(beat)` }],
  },
  { id: 'zahlen', emoji: '🔢', editors: [{ code: `s("bd*4").gain(0.7)` }] },
  { id: 'kette', emoji: '⛓️', editors: [{ code: `s("bd hh sd hh").fast(2).rev()` }] },
  {
    id: 'gleichzeitig',
    emoji: '🎚️',
    editors: [{ code: `stack(\n  s("bd*4"),\n  s("hh*8").gain(0.5),\n  s("~ cp ~ cp")\n)` }],
  },
  { id: 'effekte', emoji: '🌫️', editors: [{ code: `s("bd sd").room(0.6)` }] },
  { id: 'sounds', emoji: '🔊', editors: [{ code: `s("bd hh sd hh").bank("RolandTR909")` }] },
  { id: 'abwechslung', emoji: '🎲', editors: [{ code: `s("bd <hh sd cp>")` }] },
  {
    id: 'eigenes-stueck',
    emoji: '🎉',
    editors: [
      {
        code: `let bass = "bd*4"\n\nstack(\n  s(bass),\n  s("~ cp ~ cp").room(0.3),\n  s("hh*8").gain(0.4),\n  note("c e <g a>").s("triangle").slow(2)\n)`,
      },
    ],
  },
];

// Cheat-sheet rows: the code is language-independent, the description is not.
// Descriptions live per language under `cheatsheet[id]` in each bundle.
export const cheatsheetCodes = [
  { id: 'drums', code: 's("bd hh sd")' },
  { id: 'melody', code: 'note("c e g")' },
  { id: 'repeat', code: 'bd*4' },
  { id: 'rest', code: '~' },
  { id: 'gain', code: '.gain(0.5)' },
  { id: 'tempo', code: '.fast(2)  .slow(2)' },
  { id: 'reverse', code: '.rev()' },
  { id: 'stack', code: 'stack(a, b)' },
  { id: 'room', code: '.room(0.5)' },
  { id: 'delay', code: '.delay(0.5)' },
  { id: 'bank', code: '.bank("RolandTR909")' },
  { id: 'alternate', code: 's("bd <hh sd>")' },
];
