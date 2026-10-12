import { error } from '@sveltejs/kit';
import type { Load } from '@sveltejs/kit';

import { getGallery } from '$lib/api/art';
export const prerender = true;

export const load: Load = async ({ params }) => {
	const node = getGallery(params.path ?? '');

	if (!node) throw error(404, 'Not found');

	return { node };
};
