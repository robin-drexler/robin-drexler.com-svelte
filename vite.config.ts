import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type Plugin } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), mdPlugin()]
});

function mdPlugin(): Plugin {
	return {
		name: 'md',
		transform(code, id) {
			if (id.endsWith('.md')) {
				return {
					code: `export default ${JSON.stringify(code)};`,
					map: null
				};
			}
		}
	};
}
