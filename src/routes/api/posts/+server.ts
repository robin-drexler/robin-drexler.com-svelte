import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

import { getPosts } from '$lib/api/posts';

export const GET: RequestHandler = async ({ url }) => {
	let posts = await getPosts();

	if (url.searchParams.has('category')) {
		const category = url.searchParams.get('category');

		posts = posts.filter((post) => {
			const categories = post?.attributes?.categories;

			if (!categories || !Array.isArray(categories)) {
				return false;
			}

			return categories.includes(category || '');
		});
	}

	return json({ posts });
};
