import { findFileForPath } from '$lib/api/posts';
import { error, type Load } from '@sveltejs/kit';
export const prerender = true;

export const load: Load = async ({ params, fetch, url }) => {
	const page = await findFileForPath(url.pathname);
	if (!page) {
		return error(404);
	}

	return { post: page };
};
