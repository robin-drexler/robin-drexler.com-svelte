<script type="ts">
	export let dateString;

	let formattedDate;

	$: formatteDate = new Date(dateString).toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'UTC',
	});
</script>

<span>{formatteDate}</span>
