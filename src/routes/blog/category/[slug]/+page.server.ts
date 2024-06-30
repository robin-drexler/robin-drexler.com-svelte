import { getPosts } from '$lib/api/posts';
import type { Load } from '@sveltejs/kit';
export const prerender = true;

export const load: Load = async ({ params }) => {
	let posts = await getPosts();

	if (params.slug) {
		const category = params.slug;

		posts = posts.filter((post) => {
			const categories = post?.attributes?.categories;

			if (!categories || !Array.isArray(categories)) {
				return false;
			}

			return categories.includes(category || '');
		});

		return { posts: posts, category: params.slug };
	}
};
