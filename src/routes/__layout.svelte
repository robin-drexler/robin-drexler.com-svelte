<script>
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
	import ContentWrapper from '$lib/layout/ContentWrapper.svelte';
</script>

<article class="grid grid-rows-[auto_1fr_auto] h-full gap-9">
	<Nav />
	<ContentWrapper tag="main">
		<slot />
	</ContentWrapper>
	<Footer />
</article>
