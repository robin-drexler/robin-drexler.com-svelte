<script lang="ts">
	import ContentWrapper from './layout/ContentWrapper.svelte';
</script>

<ContentWrapper tag="footer">
	<div class="border-t border-fuchsia-100 pt-8 pb-4">
		<div class="flex items-center justify-center text-sm">
			<a
				class="flex items-center gap-2 text-gray-500 hover:text-fuchsia-600 transition-colors"
				href="/about"
			>
				About and legal stuff
			</a>
		</div>
	</div>
</ContentWrapper>
