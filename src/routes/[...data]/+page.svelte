<script lang="ts">
	import FormattedDate from '$lib/FormattedDate.svelte';
	import { gfmHeadingId } from 'marked-gfm-heading-id';
	import { markedHighlight } from 'marked-highlight';

	import type { Post } from '$lib/types';

	import { Marked } from 'marked';
	import prism from 'prismjs';
	import { sanitizeId } from '$lib/utils/sanitize-ids';

	export let data: { post: Post };

	const marked = new Marked(
		markedHighlight({
			highlight: function (code, lang) {
				let formatted = code;
				if (prism.languages[lang]) {
					formatted = prism.highlight(code, prism.languages[lang], lang);
				}

				return `<div class="mt-6 bg-gray-50 shadow-md p-3 rounded overflow-x-scroll">${formatted}</div>`;
			}
		}),
		gfmHeadingId()
	);

	$: body = marked.parse(data.post.body, {
		gfm: true,
		breaks: true
	});
</script>

<svelte:head>
	<title>{data.post.attributes.title}</title>
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.26.0/themes/prism.min.css"
		rel="stylesheet"
	/>
</svelte:head>

{#if data.post.attributes.layout === 'post'}
	<div class="content-card">
		<h1
			style:view-transition-name={`link-title-${sanitizeId(data.post.attributes.permalink || '')}`}
			style:view-transition-class="link-title"
		>
			{data.post.attributes.title}
		</h1>

		{#if data.post.attributes.categories}
			<div class="flex my-2.5 gap-2 text-xs">
				<ul>
					{#each data.post.attributes.categories as category}
						<li class="inline">
							<a href={`/blog/category/${category}`}>#{category}</a>
						</li>
					{/each}
				</ul>
			</div>
		{/if}

		{#if data.post.attributes.date}
			<FormattedDate dateString={data.post.attributes.date} />
		{/if}

		<div class="mt-6 post-body">
			{@html body}
		</div>
	</div>
{:else}
	<h1
		style:view-transition-name={`link-title-${sanitizeId(data.post.attributes.permalink || '')}`}
		style:view-transition-class="link-title"
	>
		{data.post.attributes.title}
	</h1>

	<div class="mt-6 post-body">
		{@html body}
	</div>
{/if}
