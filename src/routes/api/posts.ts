import type { RequestHandler } from '@sveltejs/kit';

import { getPosts } from '$lib/api/posts';

export const get: RequestHandler = async ({ query }) => {
	let posts = await getPosts();

	if (query.has('category')) {
		const category = query.get('category');

		posts = posts.filter((post) => {
			const categories = post?.attributes?.categories;

			if (!categories || !Array.isArray(categories)) {
				return false;
			}

			return categories.includes(category);
		});
	}

	return { body: { posts } };
};
