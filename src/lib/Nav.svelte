<script type="ts">
	import ContentWrapper from './layout/ContentWrapper.svelte';
</script>

<ContentWrapper className="flex justify-between my-4" tag="nav">
	<div>
		<a class="text-2xl font-thin" href="/">Robin Drexler</a>
	</div>
	<div class="flex space-x-6">
		<a href="/talks">Talks</a>
		<a href="/projects">Projects</a>
		<a href="/blog">Blog</a>
	</div>
</ContentWrapper>
