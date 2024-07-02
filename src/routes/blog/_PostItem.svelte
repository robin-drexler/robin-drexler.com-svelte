<script lang="ts">
	import FormattedDate from '$lib/FormattedDate.svelte';

	import type { Post } from '$lib/types';
	import { sanitizeId } from '$lib/utils/sanitize-ids';

	export let post: Post;
</script>

<li class="mt-8">
	<div class="text-sm font-thin">
		<FormattedDate dateString={post.attributes.date} />
	</div>
	<a
		style:view-transition-name={`link-title-${sanitizeId(post.attributes.permalink || '')}`}
		style:view-transition-class="link-title"
		href={post.attributes.permalink}
		class="text-xl"
	>
		{post.attributes.title}
	</a>
</li>
