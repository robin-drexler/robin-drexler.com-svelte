<script context="module" type="ts">
	import type { Load } from '@sveltejs/kit';
	export const prerender = true;

	export const load: Load = async ({ page, fetch }) => {
		const res = await (
			await fetch(`/api/posts?category=${page.params.slug}`)
		).json();

		if (!res.posts.length) {
			return;
		}

		return { props: { posts: res.posts, category: page.params.slug } };
	};
</script>

<script type="ts">
	import PostItem from '../_PostItem.svelte';
	import type { Post } from '$lib/types';

	export let posts: Post[] = [];
	export let category: string;
</script>

<svelte:head>
	<title>Posts for #{category}</title>
</svelte:head>

<h1>Posts for #{category}</h1>

<div class="mt-9">
	<ul>
		{#each posts as post}
			<PostItem {post} />
		{/each}
	</ul>
</div>
