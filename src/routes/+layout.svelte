<script>
	import { setContext } from 'svelte';
	import { writable, get } from 'svelte/store';
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
	import ContentWrapper from '$lib/layout/ContentWrapper.svelte';

	import { onNavigate } from '$app/navigation';

	const lastNavigation = writable({});

	setContext('lastNavigation', lastNavigation);

	onNavigate((navigation) => {
		lastNavigation.set({ from: navigation.from, to: navigation.to });

		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<meta property="og:image" content="/img/me_2019.jpg" />
</svelte:head>

<article class="grid grid-rows-[auto_1fr_auto] h-full gap-9">
	<Nav />
	<div class="min-w-0">
		<ContentWrapper tag="main">
			<slot />
		</ContentWrapper>
	</div>
	<Footer />
</article>
