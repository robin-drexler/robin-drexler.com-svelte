<script lang="ts">
	import { page } from '$app/stores';
	import { goto, afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	import Gallery from './_Gallery.svelte';
	import Lightbox from './_Lightbox.svelte';

	import type { GalleryNode } from '$lib/api/art';

	export let data: { node: GalleryNode };

	let openingSlug = '';
	let mounted = false;

	onMount(() => (mounted = true));

	$: activeFile = mounted ? activePhotoFile($page.url.search) : null;
	$: activeIndex = activeFile ? data.node.photos.findIndex((p) => p.file === activeFile) : -1;
	$: activePhoto = activeIndex >= 0 ? data.node.photos[activeIndex] : undefined;

	function activePhotoFile(search: string): string | null {
		const match = search.match(/[?&]photo=([^&]+)/);
		return match ? decodeURIComponent(match[1]) : null;
	}

	function open(file: string) {
		goto(`${data.node.url}?photo=${encodeURIComponent(file)}`, { noScroll: true });
	}

	function openFolder(folder: GalleryNode) {
		openingSlug = folder.slug;
		goto(folder.url);
	}

	function goToPhoto(index: number) {
		const target = data.node.photos[(index + data.node.photos.length) % data.node.photos.length];
		goto(`${data.node.url}?photo=${encodeURIComponent(target.file)}`, { noScroll: true });
	}

	function close() {
		goto(data.node.url, { replaceState: true, noScroll: true });
	}

	afterNavigate((navigation) => {
		const toPath = navigation.to?.params?.path;
		if (openingSlug && toPath === openingSlug) {
			setTimeout(() => (openingSlug = ''), 600);
		}
	});
</script>

<svelte:head>
	<title>{data.node.title} · Robin Drexler</title>
</svelte:head>

{#if data.node.crumbs.length > 0}
	<nav class="mb-8 text-sm text-gray-500 flex flex-wrap items-center gap-1.5">
		{#each data.node.crumbs as crumb, i (i)}
			<a class="hover:text-fuchsia-600 hover:underline" href={crumb.url}>{crumb.title}</a>
			<span aria-hidden="true">/</span>
		{/each}
		<span class="text-gray-900">{data.node.title}</span>
	</nav>
{/if}

<h1 class="text-4xl font-bold">{data.node.title}</h1>

{#if data.node.note}
	<p class="mt-3 mb-2 text-gray-600 leading-relaxed">{data.node.note}</p>
{/if}

<Gallery node={data.node} {openingSlug} onOpen={open} onOpenFolder={openFolder} />

{#if activePhoto}
	<Lightbox
		photos={data.node.photos}
		index={activeIndex}
		onPrev={() => goToPhoto(activeIndex - 1)}
		onNext={() => goToPhoto(activeIndex + 1)}
		onClose={close}
	/>
{/if}
