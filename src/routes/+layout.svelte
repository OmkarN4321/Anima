<script>
	import Header from "../lib/components/Header.svelte";
	import Footer from "../lib/components/Footer.svelte";
</script>

<div class="root">
	<Header />
	<slot />
	<Footer />
</div>

<style>
	.root {
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: #0f0f11;
	}
</style>
