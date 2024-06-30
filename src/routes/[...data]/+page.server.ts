import { error, type Load } from '@sveltejs/kit';

export const load: Load = async ({ params, fetch, url }) => {
	const res = await (await fetch(`/api/page?path=${url.pathname}`)).json();

	if (!res.page) {
		return error(404);
	}

	return { post: res.page };
};
