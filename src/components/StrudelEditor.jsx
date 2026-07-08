import { useEffect, useRef, useState } from 'react';
import { loadStrudel } from '../lib/strudelLoader.js';

/**
 * A single live, editable Strudel editor.
 *
 * The <strudel-editor> web component renders its CodeMirror editor as a SIBLING
 * that it inserts into its parentElement (see repl-component.mjs:
 * `this.parentElement.insertBefore(container, this.nextSibling)`). To keep React
 * out of the way, we own a plain host <div>, create the element imperatively,
 * and wipe the host on cleanup so both the element AND its sibling editor go.
 *
 * The starter code is passed via the `code` attribute (observedAttributes:
 * ['code']). Setting it before the script finishes loading is fine: on upgrade
 * the component replays attributeChangedCallback for existing attributes.
 */
export default function StrudelEditor({ code, ui }) {
  const hostRef = useRef(null);
  const elRef = useRef(null);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    let cancelled = false;
    const host = hostRef.current;
    if (!host) return;

    host.innerHTML = '';
    const el = document.createElement('strudel-editor');
    el.setAttribute('code', code.trim());
    host.appendChild(el);
    elRef.current = el;

    loadStrudel().then(
      () => !cancelled && setStatus('ready'),
      () => !cancelled && setStatus('error'),
    );

    return () => {
      cancelled = true;
      elRef.current = null;
      host.innerHTML = ''; // removes <strudel-editor> and its sibling editor div
    };
  }, [code]);

  // The StrudelMirror instance lives on el.editor once initialised.
  const play = () => elRef.current?.editor?.evaluate?.();
  const stop = () => elRef.current?.editor?.stop?.();

  return (
    <div className="strudel">
      <div className="strudel-toolbar">
        <button className="btn btn-play" onClick={play} disabled={status !== 'ready'}>
          ▶ {ui.play}
        </button>
        <button className="btn btn-stop" onClick={stop} disabled={status !== 'ready'}>
          ■ {ui.stop}
        </button>
        <span className="strudel-hint">
          {ui.kbdHintPre} <kbd>{ui.ctrlKey}</kbd>+<kbd>Enter</kbd> {ui.kbdPlays} ·{' '}
          <kbd>{ui.ctrlKey}</kbd>+<kbd>.</kbd> {ui.kbdStops}
        </span>
      </div>
      <div ref={hostRef} className="strudel-host" />
      {status === 'loading' && <p className="strudel-note">{ui.editorLoading}</p>}
      {status === 'error' && <p className="strudel-note strudel-note--error">{ui.editorError}</p>}
    </div>
  );
}
