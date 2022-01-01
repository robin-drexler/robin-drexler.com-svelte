<script context="module" type="ts">
	import type { Load } from '@sveltejs/kit';

	export const hydrate = false;

	export const load: Load = async ({ page, fetch }) => {
		const res = await (await fetch(`/api/page?path=${page.path}`)).json();

		if (!res.page) {
			return;
		}

		return { props: { post: res.page } };
	};
</script>

<script type="ts">
	import FormattedDate from '$lib/FormattedDate.svelte';
	import type { Post } from '$lib/types';

	import { marked } from 'marked';
	import prism from 'prismjs';

	export let post: Post;

	$: body = marked.parse(post.body, {
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
</script>

<svelte:head>
	<title>{post.attributes.title}</title>
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<h1>{post.attributes.title}</h1>

{#if post.attributes.categories}
	<div class="flex my-2.5 gap-2 text-xs">
		<ul>
			{#each post.attributes.categories as category}
				<li class="inline">
					<a href={`/blog/category/${category}`}>#{category}</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}

{#if post.attributes.date}
	<FormattedDate dateString={post.attributes.date} />
{/if}

<div class="mt-9 post-body">
	{@html body}
</div>
