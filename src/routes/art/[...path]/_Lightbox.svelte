<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	import type { GalleryPhoto } from '$lib/api/art';

	export let photos: GalleryPhoto[];
	export let index: number;
	export let onPrev: () => void;
	export let onNext: () => void;
	export let onClose: () => void;

	let dialog: HTMLDivElement;
	$: photo = photos[index];

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') onClose();
		else if (event.key === 'ArrowLeft') onPrev();
		else if (event.key === 'ArrowRight') onNext();
	}

	function stop(event: Event) {
		event.stopPropagation();
	}

	let touchStartX = 0;

	function handleTouchStart(event: TouchEvent) {
		touchStartX = event.touches[0].clientX;
	}

	function handleTouchEnd(event: TouchEvent) {
		const delta = event.changedTouches[0].clientX - touchStartX;
		if (Math.abs(delta) > 50) delta > 0 ? onPrev() : onNext();
	}

	onMount(() => {
		dialog?.focus();
		document.body.style.overflow = 'hidden';
	});

	onDestroy(() => {
		document.body.style.overflow = '';
	});
</script>

<svelte:window on:keydown={onKeydown} />

{#if photo}
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
	<div
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		bind:this={dialog}
		class="art-lightbox fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 sm:p-8 outline-none"
		on:touchstart|passive={handleTouchStart}
		on:touchend|passive={handleTouchEnd}
		on:click={onClose}
	>
		<button
			type="button"
			aria-label="Close"
			on:click|stopPropagation={onClose}
			class="absolute top-4 right-4 rounded-full bg-white/5 hover:bg-white/15 p-2.5 text-gray-300 hover:text-white transition-colors"
		>
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>

		{#if photos.length > 1}
			<button
				type="button"
				aria-label="Previous photo"
				on:click|stopPropagation={onPrev}
				class="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/5 hover:bg-white/15 p-2.5 text-gray-300 hover:text-white transition-colors"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</button>
		{/if}

		<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
		<figure class="flex flex-col items-center max-w-full">
			<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
			<img
				src={photo.src}
				alt={photo.title ?? photo.file}
				width={photo.width}
				height={photo.height}
				on:click|stopPropagation={stop}
				class="h-auto w-auto max-h-[calc(100dvh-9rem)] max-w-full object-contain rounded-md shadow-2xl"
			/>
			<figcaption class="mt-4 text-center max-w-xl">
				{#if photo.title}
					<div class="text-lg text-white font-medium">{photo.title}</div>
				{/if}
				{#if photo.text}
					<p class="mt-1 text-sm text-gray-400 leading-relaxed">{photo.text}</p>
				{/if}
				<div class="mt-2 text-sm text-gray-500">
					{index + 1} / {photos.length}
				</div>
			</figcaption>
		</figure>

		{#if photos.length > 1}
			<button
				type="button"
				aria-label="Next photo"
				on:click|stopPropagation={onNext}
				class="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/5 hover:bg-white/15 p-2.5 text-gray-300 hover:text-white transition-colors"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		{/if}
	</div>
{/if}

<style>
	.art-lightbox {
		animation: art-lightbox-in 0.25s ease-out both;
	}

	@keyframes art-lightbox-in {
		from {
			opacity: 0;
			transform: scale(0.98);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>
