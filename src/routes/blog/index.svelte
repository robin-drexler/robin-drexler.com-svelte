<script context="module" type="ts">
	import type { Load } from '@sveltejs/kit';
	export const prerender = true;

	export const load: Load = async ({ fetch }) => {
		const res = await (await fetch(`/api/posts`)).json();
		return { props: { posts: res.posts } };
	};
</script>

<script type="ts">
	import type { Post } from '$lib/types';

	import PostItem from './_PostItem.svelte';
	export let posts: Post[] = [];
</script>

<svelte:head>
	<title>Posts</title>
</svelte:head>

<h1>Posts</h1>

<div class="mt-9">
	<ul>
		{#each posts as post}
			<PostItem {post} />
		{/each}
	</ul>
</div>
