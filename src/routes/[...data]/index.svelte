<script context="module" type="ts">
	import type { Load } from '@sveltejs/kit';
	export const prerender = true;

	export const load: Load = async ({ page, fetch }) => {
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
		highlight: function (code, lang) {
			let formatted = code;
			if (prism.languages[lang]) {
				formatted = prism.highlight(code, prism.languages[lang], lang);
			}

			return `<div class="mt-6 bg-blue-50 p-3 rounded">${formatted}</div>`;
		}
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

	const body = marked(post.body);
	const formattedDate = post.attributes.date
		? new Date(post.attributes.date).toLocaleDateString('en-US', {
				month: 'long',
				day: 'numeric',
				year: 'numeric'
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

<div class="mt-9">
	{@html body}
</div>

<!-- XXX this only exists so tailwind picks up those classes. They are used in code highlight and tailwind misses those. 🤷‍♂️ -->
<div class="bg-blue-50 p-3 rounded hidden">ddd</div>
