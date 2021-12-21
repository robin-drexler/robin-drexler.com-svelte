<script type="ts">
	export let className: string = '';
	export let tag: 'nav' | 'main' | 'footer';

	const firstChildProps = {
		class: `${className} w-11/12 md:w-4/6 lg:w-3/6 mx-auto`
	};
	const props = {
		class: `w-full`
	};
</script>

{#if tag === 'nav'}
	<nav {...props}>
		<div {...firstChildProps}><slot /></div>
	</nav>
{:else if tag === 'main'}
	<main {...props}><div {...firstChildProps}><slot /></div></main>
{:else if tag === 'footer'}
	<footer {...props}><div {...firstChildProps}><slot /></div></footer>
{/if}
