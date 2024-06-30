import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch }) => {
	const res = await (await fetch(`/api/posts`)).json();
	return { posts: res.posts };
};
