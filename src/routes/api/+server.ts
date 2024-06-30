import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import frontMatter from 'front-matter';
import { basename } from 'path';

export const GET: RequestHandler = async ({ url }) => {
	const matchingFile = await findFileForPath(
		decodeURIComponent(url.searchParams.get('path') || '')
	);

	return json({ page: matchingFile ?? null });
};

async function findFileForPath(path: string) {
	const entries = Object.keys(import.meta.glob('../../{_posts,_pages}/*.md'));
	const slugs = entries.map((postPath) => basename(postPath, '.md'));

	for (const slug of slugs) {
		let fileContent = '';

		try {
			fileContent = (await import(`../../_posts/${slug}.md`)).default;
		} catch (e) {
			fileContent = (await import(`../../_pages/${slug}.md`)).default;
		}

		const result = frontMatter(fileContent) as {
			attributes: { permalink?: string };
		};

		const pathToCheck = result.attributes.permalink;

		if (pathToCheck === path) {
			return {
				...result,
				filePath: slug
			};
		}
	}
}
