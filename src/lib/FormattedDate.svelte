<script lang="ts">
	export let dateString: string;

	$: formatteDate = new Date(dateString).toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'UTC'
	});
</script>

<span>{formatteDate}</span>
