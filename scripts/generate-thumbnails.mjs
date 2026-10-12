import { readdir, mkdir, stat } from 'node:fs/promises';
import { join, relative, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const ART_ROOT = fileURLToPath(new URL('../static/art', import.meta.url));
const THUMBS_DIR = join(ART_ROOT, '.thumbs');
const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif']);
const THUMB_WIDTH = 900;
const THUMB_QUALITY = 72;
const CONCURRENCY = 4;
const force = process.argv.includes('--force');

async function* walk(dir) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		if (entry.name.startsWith('.')) continue;
		const path = join(dir, entry.name);
		if (entry.isDirectory()) yield* walk(path);
		else if (IMAGE_EXT.has(extname(entry.name).toLowerCase())) yield path;
	}
}

function thumbPathFor(source) {
	const rel = relative(ART_ROOT, source);
	const target = join(THUMBS_DIR, rel.slice(0, -extname(rel).length) + '.webp');
	return target;
}

async function isStale(source, target) {
	if (force) return true;
	try {
		const [from, to] = await Promise.all([stat(source), stat(target)]);
		return to.mtimeMs < from.mtimeMs;
	} catch {
		return true;
	}
}

async function generate(source) {
	const target = thumbPathFor(source);
	if (!(await isStale(source, target))) return false;

	await mkdir(dirname(target), { recursive: true });
	await sharp(source)
		.rotate()
		.resize({ width: THUMB_WIDTH, withoutEnlargement: true })
		.webp({ quality: THUMB_QUALITY })
		.toFile(target);
	return true;
}

async function run() {
	const sources = [];
	for await (const source of walk(ART_ROOT)) sources.push(source);

	let generated = 0;
	const queue = [...sources];

	async function worker() {
		while (queue.length > 0) {
			const source = queue.shift();
			if (await generate(source)) {
				generated++;
				console.log(`[thumbs] ${relative(ART_ROOT, source)}`);
			}
		}
	}

	await Promise.all(Array.from({ length: CONCURRENCY }, worker));
	console.log(`[thumbs] ${generated} generated, ${sources.length - generated} up to date`);
}

run().catch((error) => {
	console.error(error);
	process.exit(1);
});
