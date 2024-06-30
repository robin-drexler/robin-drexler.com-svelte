<script lang="ts">
	import { page } from '$app/stores';

	import ContentWrapper from './layout/ContentWrapper.svelte';
</script>

<ContentWrapper className="flex justify-between items-center my-4" tag="nav">
	<a
		class="text-2xl font-thin inline-block nav-main-link"
		style:--nav-view-transition-name={$page.url.pathname === '/' ? undefined : 'photo-me'}
		href="/">Robin Drexler</a
	>

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
