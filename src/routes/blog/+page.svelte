<script lang="ts">
	import type { Post } from '$lib/types';

	import PostItem from './_PostItem.svelte';
	export let data: { posts: Post[] };
</script>

<svelte:head>
	<title>Posts</title>
</svelte:head>

<h1>Posts</h1>

<div class="mt-9">
	<ul>
		{#each data.posts as post}
			<PostItem {post} />
		{/each}
	</ul>
</div>
