import type { RequestHandler } from '@sveltejs/kit';
import frontMatter from 'front-matter';
import { basename } from 'path';

export const get: RequestHandler = async () => {
	const posts = await getPosts();
	return { body: { posts } };
};

async function getPosts() {
	const entries = Object.keys(import.meta.glob('../../_posts/*.md'));
	const slugs = entries.map((postPath) => basename(postPath, '.md'));
	const posts = [];

	for (const slug of slugs) {
		const fileContent = (await import(`../../_posts/${slug}.md`)).default;

		const result = frontMatter(fileContent) as { attributes: { permalink?: string } };

		posts.push({
			attributes: result.attributes,
			filePath: slug
		});
	}

	posts.sort((a, b) => {
		const aDate = new Date(a.attributes.date);
		const bDate = new Date(b.attributes.date);

		return bDate.getTime() - aDate.getTime();
	});

	return posts;
}
