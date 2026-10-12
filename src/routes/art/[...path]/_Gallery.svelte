<script lang="ts">
	import type { GalleryNode } from '$lib/api/art';

	export let node: GalleryNode;
	export let openingSlug = '';
	export let onOpen: (file: string) => void;
	export let onOpenFolder: (folder: GalleryNode) => void;

	function allPhotos(folder: GalleryNode): number {
		return folder.photos.length + folder.folders.reduce((n, f) => n + allPhotos(f), 0);
	}
</script>

{#if node.folders.length > 0}
	<div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
		{#each node.folders as folder (folder.url)}
			<a
				href={folder.url}
				on:click|preventDefault={() => onOpenFolder(folder)}
				class="group rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-fuchsia-100 transition-colors hover:ring-fuchsia-200 no-underline hover:no-underline"
			>
				{#if folder.photos[0]}
					<img
						src={folder.photos[0].thumb}
						alt={folder.title}
						loading="lazy"
						decoding="async"
						width={folder.photos[0].width}
						height={folder.photos[0].height}
						style:view-transition-name={openingSlug === folder.slug ? `art-cover-${folder.slug}` : undefined}
						class="w-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.04]"
					/>
				{:else}
					<div class="w-full aspect-[4/3] bg-gradient-to-br from-fuchsia-50 to-transparent"></div>
				{/if}
				<div class="p-4">
					<div class="font-semibold text-gray-900 group-hover:text-fuchsia-600">{folder.title}</div>
					<div class="text-sm text-gray-500 mt-1">{allPhotos(folder)} photos</div>
				</div>
			</a>
		{/each}
	</div>
{/if}

{#if node.photos.length > 0}
	<h2 class="mt-14 text-xl font-semibold">
		{node.title} · {node.photos.length}
		{node.photos.length === 1 ? 'photo' : 'photos'}
	</h2>

	<div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 items-start">
		{#each node.photos as photo, i (photo.url)}
			<a
				href={photo.url}
				on:click|preventDefault={() => onOpen(photo.file)}
				style="--tilt:{photo.tilt}deg"
				class="group relative block px-4 pt-3 pb-14 rounded-[2px] bg-gradient-to-br from-white via-white to-neutral-200 ring-1 ring-black/10 shadow-[0_12px_24px_-6px_rgba(0,0,0,0.35),0_2px_6px_rgba(0,0,0,0.18)] rotate-[var(--tilt)] transition-transform duration-300 hover:rotate-0 hover:scale-[1.04] hover:-translate-y-1 no-underline hover:no-underline"
			>
				<img
					src={photo.thumb}
					alt={photo.title ?? photo.file}
					loading="lazy"
					decoding="async"
					width={photo.width}
					height={photo.height}
					style:view-transition-name={openingSlug === node.slug && i === 0 ? `art-cover-${node.slug}` : undefined}
					class="w-full h-auto bg-fuchsia-100 ring-1 ring-black/15 shadow-md shadow-black/25"
				/>
				<div
					aria-hidden="true"
					class="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 bg-fuchsia-300/60 backdrop-blur-[2px] rounded-[2px] shadow-sm ring-1 ring-black/5"
					style="rotate: calc(var(--tilt) * -0.6)"
				></div>
			</a>
		{/each}
	</div>
{/if}
