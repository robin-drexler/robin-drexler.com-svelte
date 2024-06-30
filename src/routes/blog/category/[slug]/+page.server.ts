import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params, fetch }) => {
	const res = await (await fetch(`/api/posts?category=${params.slug}`)).json();

	if (!res.posts.length) {
		return;
	}

	return { posts: res.posts, category: params.slug };
};
