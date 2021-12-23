<script context="module" type="ts">
	import type { Load } from '@sveltejs/kit';

	export const prerender = true;
	export const hydrate = false;

	export const load: Load = async ({ page, fetch }) => {
		console.log(fetch);
		const res = await (await fetch(`/api/page?path=${page.path}`)).json();

		if (!res.page) {
			return;
		}

		return { props: { post: res.page } };
	};
</script>

<script type="ts">
	import { marked } from 'marked';
	import prism from 'prismjs';

	marked.setOptions({
		gfm: true,
		breaks: true,
		highlight: function (code, lang) {
			let formatted = code;
			if (prism.languages[lang]) {
				formatted = prism.highlight(code, prism.languages[lang], lang);
			}

			return `<div class="mt-6 bg-gray-50 shadow-md p-3 rounded overflow-x-scroll">${formatted}</div>`;
		},
	});

	type Post = {
		attributes: {
			title?: string;
			permalink?: string;
			date?: string;
			categories?: string;
		};
		body: string;
	};
	export let post: Post;

	let body = '';
	let formattedDate = null;

	$: body = marked(post.body);

	$: formattedDate = post.attributes.date
		? new Date(post.attributes.date).toLocaleDateString('en-US', {
				month: 'long',
				day: 'numeric',
				year: 'numeric',
		  })
		: null;
</script>

<svelte:head>
	<title>{post.attributes.title}</title>
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<h1>{post.attributes.title}</h1>

{#if formattedDate}
	<span>{formattedDate}</span>
{/if}

<div class="mt-9 post-body">
	{@html body}
</div>
