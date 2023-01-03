<script>
	import TrendingAnimeTabPanel from "./TabPanels/TrendingAnimeTabPanel.svelte";
	import TopRatedAnimeTabPanel from "./TabPanels/TopRatedAnimeTabPanel.svelte";
	import FavouriteAnimeTabPanel from "./TabPanels/FavouriteAnimeTabPanel.svelte";

	let activeTab = 1;
	export let trendingAnime;
	export let topRatedAnime;
	export let favouriteAnime;

	const switchTabs = (tab) => {
		activeTab = tab;
	};
</script>

<div class="tabs">
	<div class="tab-list">
		<button
			class="tab"
			style:border-bottom={activeTab === 1 ? "1px solid #ff8a65" : null}
			on:click={() => switchTabs(1)}>
			Trending
		</button>
		<button
			class="tab"
			style:border-bottom={activeTab === 2 ? "1px solid #ff8a65" : null}
			on:click={() => switchTabs(2)}>
			Top rated
		</button>
		<button
			class="tab"
			style:border-bottom={activeTab === 3 ? "1px solid #ff8a65" : null}
			on:click={() => switchTabs(3)}>
			Favourites
		</button>
	</div>

	<div class="tab-panels">
		{#if activeTab === 1}
			<TrendingAnimeTabPanel {trendingAnime} />
		{:else if activeTab === 2}
			<TopRatedAnimeTabPanel {topRatedAnime} />
		{:else if activeTab === 3}
			<FavouriteAnimeTabPanel {favouriteAnime} />
		{/if}
	</div>
</div>

<style>
	.tabs {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.tab-list {
		width: 100%;
		display: flex;
	}

	.tab {
		height: 40px;
		padding: 0.25rem 0.5rem;
		font-size: 1rem;
	}

	.tab-panels {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
