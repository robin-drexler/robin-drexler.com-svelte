import { getPosts } from '$lib/api/posts';
import type { Load } from '@sveltejs/kit';
export const prerender = true;

export const load: Load = async ({ fetch }) => {
	let posts = await getPosts();
	return { posts };
};
