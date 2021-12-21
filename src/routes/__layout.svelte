<script>
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
	import ContentWrapper from '$lib/layout/ContentWrapper.svelte';
</script>

<article class="grid grid-rows-[100px_1fr_100px] h-full">
	<Nav />
	<ContentWrapper tag="main">
		<slot />
	</ContentWrapper>
	<Footer />
</article>
