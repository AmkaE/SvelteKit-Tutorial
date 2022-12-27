<script>
	// @ts-nocheck

	import { page } from '$app/stores';

	const message = $page.error.message;
</script>

<div class="error">
	<h1>Ooops!</h1>
	<h2>{message}</h2>

	<a href="/guides">View All Guides...</a>
</div>

<style>
	.error {
		text-align: center;
		margin-bottom: 60px;
	}
</style>
