import type { RawPost } from '$lib/types';
import frontMatter from 'front-matter';
import { basename } from 'path';

export async function getPosts(): Promise<RawPost[]> {
	const entries = Object.keys(import.meta.glob('../../_posts/*.md'));
	const slugs = entries.map((postPath) => basename(postPath, '.md'));
	const posts = [];

	for (const slug of slugs) {
		const fileContent = (await import(`../../_posts/${slug}.md`)).default;

		const result = frontMatter(fileContent) as {
			attributes: { permalink?: string };
			body: string;
		};

		posts.push({
			attributes: result.attributes,
			filePath: slug,
			rawBody: result.body,
		});
	}

	posts.sort((a, b) => {
		const aDate = new Date(a.attributes.date);
		const bDate = new Date(b.attributes.date);

		return bDate.getTime() - aDate.getTime();
	});

	return posts;
}
