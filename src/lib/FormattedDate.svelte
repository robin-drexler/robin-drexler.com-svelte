<script type="ts">
	export let dateString;

	let formattedDate;

	$: formatteDate = new Date(dateString).toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	});
</script>

<span>{formatteDate}</span>
