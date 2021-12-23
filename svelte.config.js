// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		prerender: {
			crawl: true,
		},
		vite: {
			plugins: [mdPlugin()],
		},
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		router: true,
	},
};

/** @return {import('vite').Plugin} */
function mdPlugin() {
	return {
		name: 'md',
		transform(code, id) {
			if (id.endsWith('.md')) {
				return {
					code: `export default ${JSON.stringify(code)};`,
					map: null,
				};
			}
		},
	};
}

export default config;
