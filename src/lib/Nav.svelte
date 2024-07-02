<script lang="ts">
	import { page } from '$app/stores';
	import { getContext } from 'svelte';

	import ContentWrapper from './layout/ContentWrapper.svelte';

	const lastNav = getContext('lastNavigation');

	$: lastFrom = $lastNav.from?.url?.pathname;
	$: lastTo = $lastNav.to?.url?.pathname;
</script>

<ContentWrapper className="flex justify-between items-center my-4" tag="nav">
	<a class="text-2xl font-thin inline-block nav-main-link" href="/"
		>Robin Drexler

		{#if $page.url.pathname !== '/'}
			<span style:view-transition-name={lastFrom === '/' || lastTo === '/' ? 'wave' : undefined}
				>👋</span
			>
		{/if}
	</a>

	<div class="flex space-x-6">
		<a href="/talks">Talks</a>
		<a href="/projects">Projects</a>
		<a href="/blog">Blog</a>
	</div>
</ContentWrapper>

<style>
	.nav-main-link {
		view-transition-name: var(--nav-view-transition-name);
	}
</style>
