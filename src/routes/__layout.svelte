<script>
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
	import ContentWrapper from '$lib/layout/ContentWrapper.svelte';

	/**
	 * remove old service workers that may still be lingering
	 */
	if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
		navigator.serviceWorker.getRegistrations().then(function (registrations) {
			if (!registrations.length) {
				return;
			}
			for (let registration of registrations) {
				registration.unregister();
			}
		});
	}
</script>

<article class="grid grid-rows-[auto_1fr_auto] h-full gap-9">
	<Nav />
	<ContentWrapper tag="main">
		<slot />
	</ContentWrapper>
	<Footer />
</article>
