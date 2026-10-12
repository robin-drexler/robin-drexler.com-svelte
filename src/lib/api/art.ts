import { readdirSync, openSync, readSync, closeSync, existsSync } from 'node:fs';
import { basename, join } from 'node:path';

import { artManifest, type ArtFolder, type ArtPhoto } from '$lib/data/art';

export type GalleryPhoto = {
	file: string;
	url: string;
	src: string;
	thumb: string;
	title?: string;
	text?: string;
	width?: number;
	height?: number;
	tilt: number;
};

export type GalleryNode = {
	slug: string;
	title: string;
	note?: string;
	url: string;
	crumbs: { title: string; url: string }[];
	folders: GalleryNode[];
	photos: GalleryPhoto[];
};

const ART_ROOT = join(process.cwd(), 'static', 'art');
const IMAGE_EXT = new Set(['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif']);

function slugify(name: string): string {
	return name
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}

type WalkedDir = {
	name: string;
	files: string[];
	dirs: WalkedDir[];
	rel: string;
};

function walk(dir: string, rel: string): WalkedDir {
	const entries = readdirSync(dir, { withFileTypes: true });
	const files: string[] = [];
	const dirs: WalkedDir[] = [];

	for (const entry of entries) {
		if (entry.name.startsWith('.')) continue;
		if (entry.isDirectory())
			dirs.push(walk(join(dir, entry.name), rel ? `${rel}/${entry.name}` : entry.name));
		else if (IMAGE_EXT.has(basename(entry.name).split('.').pop()!.toLowerCase()))
			files.push(entry.name);
	}

	files.sort((a, b) => a.localeCompare(b));
	dirs.sort((a, b) => a.name.localeCompare(b.name));

	return { name: basename(dir), files, dirs, rel };
}

function folderSlug(dir: WalkedDir, manifest: ArtFolder | undefined): string {
	return manifest?.slug?.trim() || slugify(manifest?.title ?? '') || slugify(dir.name);
}

function readHeader(filePath: string, size = 131072): Buffer {
	const fd = openSync(filePath, 'r');
	const buf = Buffer.alloc(size);
	const read = readSync(fd, buf, 0, size, 0);
	closeSync(fd);
	return buf.subarray(0, read);
}

function jpegSize(buf: Buffer): { width: number; height: number } | null {
	if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null;

	let off = 2;
	while (off + 9 < buf.length) {
		if (buf[off] !== 0xff) {
			off++;
			continue;
		}

		const marker = buf[off + 1];
		if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
			off += 2;
			continue;
		}

		const len = buf.readUInt16BE(off + 2);
		const isSof =
			marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;

		if (isSof) return { height: buf.readUInt16BE(off + 5), width: buf.readUInt16BE(off + 7) };

		off += 2 + len;
	}

	return null;
}

function tilt(seed: string): number {
	let h = 2166136261;
	for (let i = 0; i < seed.length; i++) {
		h ^= seed.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	h = (h >>> 0) % 100;
	return Math.round(((h / 100) * 4 - 2) * 2) / 2;
}

function warn(message: string) {
	console.warn(`[art] ${message}`);
}

function buildPhotos(
	walked: WalkedDir,
	manifest: ArtFolder | undefined,
	baseUrl: string
): GalleryPhoto[] {
	const listed = manifest?.photos ?? [];
	const available = new Map(walked.files.map((f) => [f, f] as const));
	const photos: GalleryPhoto[] = [];

	const make = (file: string, declared?: ArtPhoto): GalleryPhoto => {
		const relFile = walked.rel ? `${walked.rel}/${file}` : file;
		const src = '/art/' + encodeURI(relFile);
		const thumbRel = relFile.replace(/\.[^.]+$/, '.webp');
		const thumb = existsSync(join(ART_ROOT, '.thumbs', thumbRel))
			? '/art/.thumbs/' + encodeURI(thumbRel)
			: src;
		const url = baseUrl.replace(/\/$/, '') + '?photo=' + encodeURIComponent(file);
		const size = jpegSize(readHeader(join(ART_ROOT, walked.rel, file)));
		const photo: GalleryPhoto = {
			file,
			url,
			src,
			thumb,
			width: size?.width,
			height: size?.height,
			tilt: tilt(file)
		};
		if (declared?.title) photo.title = declared.title;
		if (declared?.text) photo.text = declared.text;
		return photo;
	};

	for (const declared of listed) {
		if (available.has(declared.file)) {
			photos.push(make(declared.file, declared));
			available.delete(declared.file);
		} else {
			warn(`"${declared.file}" is listed in the manifest but missing in static/art/${walked.rel}`);
		}
	}

	for (const file of available.keys()) photos.push(make(file));

	return photos;
}

function toNode(
	walked: WalkedDir,
	manifest: ArtFolder | undefined,
	baseUrl: string,
	crumbs: { title: string; url: string }[],
	isRoot = false
): GalleryNode {
	const slug = folderSlug(walked, manifest);
	const url = isRoot ? baseUrl : `${baseUrl}${slug}`;
	const title = manifest?.title?.trim() || walked.name;

	const photos = buildPhotos(walked, manifest, `${url}/`);
	const folders = buildFolders(walked, manifest, `${url}/`, crumbs, title, url);

	return {
		slug,
		title,
		note: manifest?.note,
		url,
		crumbs,
		folders,
		photos
	};
}

function buildFolders(
	walked: WalkedDir,
	manifest: ArtFolder | undefined,
	baseUrl: string,
	crumbs: { title: string; url: string }[],
	parentTitle: string,
	parentUrl: string
): GalleryNode[] {
	const dirs = walked.dirs;
	const matched = new Set<WalkedDir>();
	const folders: GalleryNode[] = [];

	for (const declared of manifest?.folders ?? []) {
		const dir = dirs.find((d) => folderSlug(d, declared) === slugify(d.name));
		if (dir && !matched.has(dir)) {
			matched.add(dir);
			folders.push(
				toNode(dir, declared, baseUrl, [...crumbs, { title: parentTitle, url: parentUrl }])
			);
		}
	}

	for (const dir of dirs) {
		if (matched.has(dir)) continue;
		folders.push(
			toNode(dir, undefined, baseUrl, [...crumbs, { title: parentTitle, url: parentUrl }])
		);
	}

	return folders;
}

let cachedTree: GalleryNode | null = null;

function getTree(): GalleryNode {
	if (!cachedTree) {
		const root = walk(ART_ROOT, '');
		cachedTree = toNode(root, artManifest, '/art', [], true);
	}
	return cachedTree;
}

export function getGallery(rawPath: string): GalleryNode | null {
	const segments = rawPath.split('/').filter(Boolean);
	let node = getTree();

	for (const segment of segments) {
		const next = node.folders.find((f) => f.slug === segment);
		if (!next) return null;
		node = next;
	}

	return node;
}
