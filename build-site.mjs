import { readFile, writeFile } from 'node:fs/promises';

const source = await readFile(new URL('./index.html', import.meta.url), 'utf8');
const entry = '/Portfolio/assets/signal-story.js';
if (!source.includes(`src="${entry}"`)) throw new Error('Could not find the compiled React entry in index.html.');
await writeFile(new URL('./site-build/index.html', import.meta.url), source, 'utf8');
