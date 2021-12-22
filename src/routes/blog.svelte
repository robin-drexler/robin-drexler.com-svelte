<script context="module" type="ts">
	import type { Load } from '@sveltejs/kit';
	export const prerender = true;

	export const load: Load = async ({ page, fetch }) => {
		const res = await (await fetch(`/api/posts`)).json();
		return { props: { posts: res.posts } };
	};
</script>

<script type="ts">
	import FormattedDate from '$lib/FormattedDate.svelte';

	type PostData = {
		attributes: {
			title?: string;
			permalink?: string;
			date?: string;
			categories?: string;
		};
	};
	export let posts: PostData[] = [];
</script>

<svelte:head>
	<title>Posts</title>
</svelte:head>

<h1>Posts</h1>

<div class="mt-9">
	<ul>
		{#each posts as post}
			<li class="mt-8">
				<div class="text-sm font-thin">
					<FormattedDate dateString={post.attributes.date} />
				</div>
				<a href={post.attributes.permalink} class="text-xl">
					{post.attributes.title}
				</a>
			</li>
		{/each}
	</ul>
</div>

<!-- XXX this only exists so tailwind picks up those classes. They are used in code highlight and tailwind misses those. 🤷‍♂️ -->
<div class="bg-blue-50 p-3 rounded hidden">ddd</div>
