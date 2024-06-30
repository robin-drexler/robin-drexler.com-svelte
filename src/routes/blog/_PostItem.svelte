<script lang="ts">
	import FormattedDate from '$lib/FormattedDate.svelte';

	import type { Post } from '$lib/types';

	export let post: Post;
	export let isPreviousTarget: boolean = false;
</script>

<li class="mt-8">
	<div class="text-sm font-thin">
		<FormattedDate dateString={post.attributes.date} />
	</div>
	<a
		style:view-transition-name={isPreviousTarget ? 'link-title' : undefined}
		href={post.attributes.permalink}
		class="text-xl"
		on:click={(event) => {
			event.currentTarget.style.viewTransitionName = 'link-title';
		}}
	>
		{post.attributes.title}
	</a>
</li>
