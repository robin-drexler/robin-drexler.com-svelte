<script lang="ts">
	import type { Post } from '$lib/types';

	import PostItem from './_PostItem.svelte';
	import { onNavigate } from '$app/navigation';
	import { getContext, onMount } from 'svelte';

	export let data: { posts: Post[] };
	const lastNav = getContext('lastNavigation');

	$: lastBlogPath = $lastNav.from?.url?.pathname;
</script>

<svelte:head>
	<title>Posts</title>
</svelte:head>

<h1>Posts</h1>

<div class="mt-9">
	<ul>
		{#each data.posts as post}
			<PostItem {post} isPreviousTarget={post.attributes.permalink === lastBlogPath} />
		{/each}
	</ul>
</div>
