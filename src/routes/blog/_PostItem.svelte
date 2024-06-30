<script lang="ts">
	import FormattedDate from '$lib/FormattedDate.svelte';

	import type { Post } from '$lib/types';

	export let post: Post;
</script>

<li class="mt-8">
	<div class="text-sm font-thin">
		<FormattedDate dateString={post.attributes.date} />
	</div>
	<a href={post.attributes.permalink} class="text-xl">
		{post.attributes.title}
	</a>
</li>
