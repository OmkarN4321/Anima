<script>
	import Tabs from "../lib/components/Tabs.svelte";
	import PopularAnimeCarousel from "../lib/components/PopularAnimeCarousel.svelte";

	export let data;
	const { popularAnime, trendingAnime, topRatedAnime, favouriteAnime } = data;
</script>

<div class="home-page">
	<PopularAnimeCarousel {popularAnime} />

	<Tabs {trendingAnime} {topRatedAnime} {favouriteAnime} />
</div>

<style>
	.home-page {
		width: 100%;
		min-height: calc(100vh - 132px);
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		background-color: #0f0f11;
	}
</style>
