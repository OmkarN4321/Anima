<script>
	export let data;
	const { id, episode, videoLinks, animeInfo } = data;
</script>

<div class="stream-page">
	<div class="details">
		<h2 class="title">{animeInfo.title.english ? animeInfo.title.english : animeInfo.title.userPreferred}</h2>

		<h3 class="episode-no">Episode {episode}</h3>
	</div>

	{#if videoLinks.primaryVideoLink}
		<div class="stream-screen">
			<iframe
				frameborder="0"
				allowFullScreen
				src={videoLinks.primaryVideoLink}
				title={animeInfo.title.english ? animeInfo.title.english : animeInfo.title.userPreferred}
				class="stream-screen-iframe" />
		</div>
	{:else if videoLinks.secondaryVideoLink}
		<div class="stream-screen">
			<iframe
				frameborder="0"
				allowFullScreen
				src={videoLinks.secondaryVideoLink}
				title={animeInfo.title.english ? animeInfo.title.english : animeInfo.title.userPreferred}
				class="stream-screen-iframe" />
		</div>
	{:else}
		<p class="stream-screen-sorry-msg">No video stream available</p>
	{/if}

	<div class="episode-selection">
		<h3 class="episode-selection-title">Episodes</h3>

		<div class="episodes">
			{#each [...new Array(animeInfo.episodes).keys()] as episode}
				<a href={`/animeWatch/${id}/${episode + 1}`} target="_parent" class="episode-button">
					{episode + 1}
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.stream-page {
		width: 100%;
		min-height: calc(100vh - 132px);
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		background-color: #0f0f11;
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.title {
		font-size: 1.5rem;
		font-weight: 600;
	}

	.episode-no {
		font-size: 1.25rem;
		font-weight: 600;
	}

	.stream-screen {
		overflow: hidden;
		position: relative;
		max-width: 100%;
		height: 0;
		padding-top: 56.25%;
		-webkit-overflow-scrolling: touch;
		border: 1px solid #ff8a65;
		border-radius: 0.25rem;
	}

	.stream-screen-iframe {
		position: absolute;
		top: 0;
		left: 0;
		border: 0;
		width: 100%;
		height: 100%;
		border-radius: 0.25rem;
	}

	.stream-screen-sorry-msg {
		font-size: 1rem;
		font-weight: 400;
	}

	.episode-selection {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.episode-selection-title {
		font-size: 1.25rem;
		font-weight: 600;
	}

	.episodes {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.episode-button {
		width: calc((100% - 224px) / 15);
		height: 40px;
		padding: 0.25rem 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1rem;
		border: 1px solid #ff8a65;
		border-radius: 0.25rem;
	}

	.episode-button:hover {
		transform: scale(1.025);
		transition: all 0.2s ease-in-out;
	}

	@media only screen and (max-width: 1024px) {
		.episode-button {
			width: calc((100% - 144px) / 10);
		}
	}

	@media only screen and (max-width: 640px) {
		.episode-button {
			width: calc((100% - 64px) / 5);
		}
	}
</style>
