<script>
	// @ts-nocheck

	import { page } from '$app/stores';

	const status = $page.status;
	const message = $page.error.message;
</script>

<div class="error">
	<h1>Ooops!</h1>

	{#if $page.status === 404}
		<h2>Sorry, we couldn't find that page.</h2>
	{:else}
		<h2>{status} {message}</h2>
	{/if}

	<a href="/guides">View All Guides...</a>
</div>

<style>
	.error {
		text-align: center;
		margin-bottom: 60px;
	}
</style>
