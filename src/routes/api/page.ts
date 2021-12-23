import type { RequestHandler } from '@sveltejs/kit';
import frontMatter from 'front-matter';
import { basename } from 'path';

export const prerender = false;
export const get: RequestHandler = async ({ query }) => {
	const matchingFile = await findFileForPath(
		decodeURIComponent(query.get('path')),
	);

	return { body: { page: matchingFile ?? null } };
};

async function findFileForPath(path) {
	const entries = Object.keys(import.meta.glob('../../{_posts,_pages}/*.md'));
	const slugs = entries.map((postPath) => basename(postPath, '.md'));

	for (const slug of slugs) {
		let fileContent;

		try {
			fileContent = (await import(`../../_posts/${slug}.md`)).default;
		} catch (e) {
			fileContent = (await import(`../../_pages/${slug}.md`)).default;
		}

		const result = frontMatter(fileContent) as {
			attributes: { permalink?: string };
		};

		const pathToCheck = result.attributes.permalink.replace(/\/$/, '');

		if (pathToCheck === path) {
			return {
				...result,
				filePath: slug,
			};
		}
	}
}
