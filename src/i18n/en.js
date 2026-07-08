// English bundle — mirrors the German source exactly (same keys, same chapter
// ids). Text is simple English (A2/B1): short sentences, little jargon.
//
// Placeholders: {done}/{total}, {n}, {a}/{b} are filled in at render time — keep
// them verbatim in every translation.

export default {
  ui: {
    brandBadge: 'Music & Code',
    homeTitle: 'Learn to code – with music',
    homeSub:
      'Make your own music in the browser. Along the way, you learn how coding works. No prior knowledge needed. In simple language, step by step.',
    start: 'Let’s go',
    progress: 'You have opened {done} of {total} chapters.',
    howtoLabel: 'How it works:',
    howto:
      'Every chapter has a little bit of code. Click ▶ Play and listen. Then change the code and hear what happens. You can’t break anything.',
    chaptersHeading: 'Chapters',
    cheatsheetHeading: 'Cheat sheet',
    cheatsheetSub: 'The most important building blocks at a glance:',
    chapterLabel: 'Chapter {n}',
    visited: 'visited',
    footerPre: 'Built with',
    footerLink: 'Strudel',
    footerPost: '· A learning module by Dirk Schulenburg',
    overview: 'Overview',
    chapterOf: 'Chapter {a} / {b}',
    musicLabel: 'In music',
    codeLabel: 'In coding',
    tryThis: 'Try this',
    finish: 'Done! Back to overview',
    play: 'Play',
    stop: 'Stop',
    kbdHintPre: 'Tip:',
    ctrlKey: 'Ctrl',
    kbdPlays: 'plays',
    kbdStops: 'stops',
    editorLoading: 'Editor is loading …',
    editorError: 'The editor could not load. Are you online? Reload the page.',
    langLabel: 'Language',
  },

  chapters: {
    'erster-beat': {
      title: 'Your first beat',
      concept: 'One command',
      intro: [
        'Welcome! Here you make music – with code.',
        'Code is a command. You tell the computer what to do.',
        'Click ▶ Play below. You hear a beat. With ■ Stop you stop it.',
      ],
      bridge: {
        music: 'You set a rhythm.',
        code: 'A line of code is a command to the computer.',
      },
      tasks: [
        'Click ▶ Play and listen.',
        'Change sd to cp. Click ▶ again. What is different?',
        'The short words are drums: bd = bass drum, hh = hi-hat, sd = snare, cp = clap.',
      ],
      tip: 'The sound only starts after the first click on ▶. It is more fun with headphones.',
    },
    'text-string': {
      title: 'Text in quotation marks',
      concept: 'Text (string)',
      intro: [
        'Look closely: between the marks " " there is text.',
        'In almost every programming language, text is called a “string”.',
        'The computer plays exactly the words in the text – no more, no less.',
      ],
      bridge: {
        music: 'The words are your notes for the drums.',
        code: 'Text between "…" is a string – an important kind of data.',
      },
      tasks: [
        'Change the words in the text. For example: bd hh hh sd',
        'Write a word wrong, e.g. "bx". What happens? The computer does not know some words.',
        'Only what is between "…" gets played.',
      ],
      tip: 'Don’t forget the quotation marks. Without them, the computer does not understand the text.',
    },
    'liste-sequenz': {
      title: 'The list',
      concept: 'Sequence (list)',
      intro: [
        'The text has several words with spaces between them.',
        'That is a list. The computer plays it from left to right, one after another.',
        'With a star * you repeat something. bd*4 means: the bass drum four times.',
      ],
      bridge: {
        music: 'A row of hits, one after another.',
        code: 'A list (sequence): things in a fixed order.',
      },
      tasks: [
        'Make the list longer. Add more words.',
        'Try hh*8. Hear the difference from hh*2.',
        'More words in the same time = each word gets faster.',
      ],
      tip: 'The whole list always fits into one bar. More things = each one gets shorter.',
    },
    funktion: {
      title: 'Calling functions',
      concept: 'Function + argument',
      intro: [
        's(…) is a function. The parentheses mean: “Do something!”',
        'What is inside the parentheses is the argument. It tells the function what to work with.',
        'note(…) is another function. It plays notes (a melody) instead of drums.',
      ],
      bridge: {
        music: 'A tool you give something to: drums or notes.',
        code: 'A function with parentheses (…) calls an action. The content is the argument.',
      },
      tasks: [
        'Change the notes. The letters c d e f g a b are notes.',
        'Try a number after them: c3 sounds lower, c5 sounds higher.',
        'Compare: s("…") makes drums, note("…") makes melody.',
      ],
      tip: 'c d e f g a b are notes like the white keys on a piano.',
    },
    variable: {
      title: 'Giving names',
      concept: 'Variable',
      intro: [
        'Sometimes you want to use the same thing more than once.',
        'Then you give it a name. That is called a variable.',
        'let beat = "bd hh sd hh" means: remember this pattern under the name beat.',
        'After that you just use beat. If you change it at the top, everything changes.',
      ],
      bridge: {
        music: 'You give your favourite rhythm a name.',
        code: 'A variable stores a value under a name: let name = value',
      },
      tasks: [
        'Change the text at beat. Click ▶. The whole beat changes.',
        'The name can be almost anything. Call it trommeln, for example.',
        'Important: first explain the name (let …), then use it.',
      ],
      tip: 'A good name says what is inside – for example bass or rhythmus.',
    },
    zahlen: {
      title: 'Numbers as values',
      concept: 'Number + parameter',
      intro: [
        'Not only text is a value. Numbers are too.',
        '.gain(0.7) makes it quieter. 1 is normal, 0.5 is half as loud.',
        '.fast(2) plays twice as fast, .slow(2) half as fast.',
        'The number in the parentheses controls how strong the effect is.',
      ],
      bridge: {
        music: 'Sliders: volume and tempo.',
        code: 'Numbers are values. As an argument in (…) they control a function.',
      },
      tasks: [
        'Change 0.7 to 0.3. Hear the difference.',
        'Add .fast(2): s("bd*4").gain(0.7).fast(2)',
        'Text goes in "…". Numbers do NOT – so 0.7, not "0.7".',
      ],
      tip: 'Careful: use a dot, not a comma. Write 0.5, not 0,5.',
    },
    kette: {
      title: 'Order matters',
      concept: 'Method chain',
      intro: [
        'You can join several commands together. That is called a chain.',
        'Each dot . adds a step.',
        '.fast(2).rev() means: first faster, then backwards (rev = reverse).',
        'The order is important – like a recipe: first this, then that.',
      ],
      bridge: {
        music: 'Effects one after another: faster, then backwards.',
        code: 'Method chain: steps run one after another. The order matters.',
      },
      tasks: [
        'Leave out .rev(). Hear the difference.',
        'Swap the order: .rev().fast(2).',
        'Add .gain(0.6) at the end.',
      ],
      tip: 'Each step starts with a dot . and works with the result before it.',
    },
    gleichzeitig: {
      title: 'Playing at the same time',
      concept: 'Parallelism',
      intro: [
        'Until now one track was playing. Now several play together.',
        'stack(…) stacks tracks on top of each other. They all run at the same time.',
        'Separate the tracks with a comma , – each track on its own line.',
        'The symbol ~ is a pause (silence).',
      ],
      bridge: {
        music: 'A band: bass drum, hi-hat and clap at the same time.',
        code: 'stack(a, b, c) runs several patterns in parallel.',
      },
      tasks: [
        'Add more ~ . Hear how pauses change the rhythm.',
        'Add a melody as a new line: note("c e g").s("sine"),',
        'Take one track away. Hear what is missing.',
      ],
      tip: 'A comma at the end of each line – just not after the last track.',
    },
    effekte: {
      title: 'Reverb and echo',
      concept: 'Effects',
      intro: [
        'You can give sounds effects – like in a recording studio.',
        '.room(0.6) makes reverb. The sound feels like it is in a big room.',
        '.delay(0.5) makes an echo. The sound comes back once more.',
        'These are also functions with a number: bigger number = more effect.',
      ],
      bridge: {
        music: 'Reverb and echo like in a recording studio.',
        code: 'Effect functions change the result without changing the core.',
      },
      tasks: [
        'Change the number in .room(). Try 0.2 and 0.9.',
        'Swap .room() for .delay(0.5). Do you hear the echo?',
        'Add both: s("bd sd").room(0.4).delay(0.4)',
      ],
      tip: 'Less is often better. Too much reverb makes everything muddy.',
    },
    sounds: {
      title: 'Other sounds',
      concept: 'Choosing from a library',
      intro: [
        'Strudel has many different sounds – not just one drum.',
        '.bank("RolandTR909") picks a different drum machine.',
        'The same words (bd, hh, sd) then sound completely different.',
        'So you choose from a big library of sounds.',
      ],
      bridge: {
        music: 'Plug in a different drum machine.',
        code: 'Pick one from many ready-made building blocks.',
      },
      tasks: [
        'Change "RolandTR909" to "RolandTR808". Do you hear the difference?',
        'Leave out .bank(…). How does the default drum sound?',
        'Also try "AkaiLinn" or "CasioRZ1".',
      ],
      tip: 'Upper and lower case matters: RolandTR909, not rolandtr909.',
    },
    abwechslung: {
      title: 'Variety',
      concept: 'Change over time',
      intro: [
        'Until now everything repeated the same way every round.',
        'With angle brackets < > the computer takes turns.',
        's("bd <hh sd>") first plays bd + hh, and next round bd + sd.',
        'This makes your music lively and never boring.',
      ],
      bridge: {
        music: 'Every round sounds a little different.',
        code: 'A value that changes over time – round by round.',
      },
      tasks: [
        'Listen closely: what changes on each repeat?',
        'Put more sounds in the brackets: <hh sd cp oh>',
        'Notes work too: note("c <e g>")',
      ],
      tip: 'Angle brackets < > mean: one after another, one per round.',
    },
    'eigenes-stueck': {
      title: 'Your own piece',
      concept: 'Free project',
      intro: [
        'Now you know many building blocks: command, text, list, function, variable, number, chain, playing together, effects, sounds and variety.',
        'Here is a small, finished piece. Change anything you like.',
        'There is no wrong. Try, listen, change – that is how programmers really work.',
      ],
      bridge: {
        music: 'Your song.',
        code: 'Your program – built from many little building blocks.',
      },
      tasks: [
        'Change the bass, e.g. to "bd ~ bd bd".',
        'Change the melody in note(…).',
        'Play with .gain(), .fast(), .slow() and .rev().',
        'If you like something: write down the code or take a photo of the screen.',
      ],
      tip: 'On strudel.cc you find many more sounds and examples.',
    },
  },

  cheatsheet: {
    drums: 'play drums',
    melody: 'play melody (notes)',
    repeat: 'repeat four times',
    rest: 'pause (silence)',
    gain: 'quieter / louder',
    tempo: 'faster / slower',
    reverse: 'backwards',
    stack: 'several at the same time',
    room: 'reverb (room effect)',
    delay: 'echo',
    bank: 'different drum machine',
    alternate: 'take turns – one per round',
  },
};