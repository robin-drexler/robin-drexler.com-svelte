<script lang="ts">
	import type { Post } from '$lib/types';
	import PostItem from '../../_PostItem.svelte';

	export let data: { posts: Post[]; category: string };
</script>

<svelte:head>
	<title>Posts for #{data.category}</title>
</svelte:head>

<h1>Posts for #{data.category}</h1>

<div class="mt-9">
	<ul>
		{#each data.posts as post}
			<PostItem {post} />
		{/each}
	</ul>
</div>
