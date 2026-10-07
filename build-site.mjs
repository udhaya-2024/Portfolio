import { readFile, writeFile } from 'node:fs/promises';

const source = await readFile(new URL('./index.html', import.meta.url), 'utf8');
const published = source.replace('src="./main.tsx"', 'src="/Portfolio/assets/signal-story.js"');
if (published === source) throw new Error('Could not find the React entry in index.html.');
await writeFile(new URL('./site-build/index.html', import.meta.url), published, 'utf8');
