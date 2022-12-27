<script>
	import Title from '$lib/Title.svelte';
</script>

<header>
	<Title title="Ninja Gaming Reviews" />
</header>

<main>
	<slot />
</main>

<footer>
	<p>Copyright 2022 Ninja Gaming Guides</p>
</footer>

<style>
	header {
		display: flex;
		justify-content: center;
	}
	main {
		max-width: 960px;
		margin: 20px auto;
		padding: 0 0.5rem;
	}
	footer {
		text-align: center;
	}
</style>
