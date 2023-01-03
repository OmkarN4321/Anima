<script>
	import AnimeRecommendationCarousel from "../../../lib/components/AnimeRecommendationCarousel.svelte";

	export let data;
	let { animeInfo, recommendedAnime } = data;
</script>

<div class="info-page">
	{#if animeInfo}
		<img
			class="primary-image"
			src={animeInfo.bannerImage}
			alt={animeInfo.title.english ? animeInfo.title.english : animeInfo.title.userPreferred} />
		<img
			class="secondary-image"
			src={animeInfo.coverImage.extraLarge}
			alt={animeInfo.title.english ? animeInfo.title.english : animeInfo.title.userPreferred} />

		<div class="details">
			<h2 class="title">{animeInfo.title.english ? animeInfo.title.english : animeInfo.title.userPreferred}</h2>

			<h3 class="genres">
				{#each animeInfo.genres as genre, i}
					{i + 1 !== animeInfo.genres.length ? `${genre}, ` : genre}
				{/each}
			</h3>

			<div class="details-extra">
				<p class="status">
					<svg
						width="16px"
						height="16px"
						fill="#388e3c"
						stroke="#388e3c"
						stroke-width="0"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<g>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M2 3h19.138a.5.5 0 0 1 .435.748L18 10l3.573 6.252a.5.5 0 0 1-.435.748H4v5H2V3z" />
						</g>
					</svg>

					{animeInfo.status}
				</p>

				<p class="duration">
					<svg
						width="16px"
						height="16px"
						fill="#0288d1"
						stroke="#0288d1"
						stroke-width="0"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<g>
							<path fill="none" d="M0 0h24v24H0z" />
							<path
								d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-10V7h-2v7h6v-2h-4z" />
						</g>
					</svg>

					{animeInfo.duration} mins
				</p>

				<p class="rating">
					<svg
						width="16px"
						height="16px"
						fill="#fbc02d"
						stroke="#fbc02d"
						stroke-width="0"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<g>
							<path fill="none" d="M0 0h24v24H0z" />
							<path
								d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
						</g>
					</svg>

					{animeInfo.meanScore / 10}
				</p>

				<p class="episode-count">
					<svg
						width="16px"
						height="16px"
						fill="#d32f2f"
						stroke="#d32f2f"
						stroke-width="0"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<g>
							<path fill="none" d="M0 0h24v24H0z" />
							<path
								d="M20.083 10.5l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm0 4.7l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zM12.514 1.309l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0z" />
						</g>
					</svg>

					{animeInfo.episodes} eps
				</p>
			</div>
		</div>

		<div class="description">
			<h3 class="description-title">Description</h3>

			<p class="description-text">{@html animeInfo.description}</p>
		</div>

		<div class="episode-selection">
			<h3 class="episode-selection-title">Episodes</h3>

			<div class="episodes">
				{#each [...new Array(animeInfo.episodes).keys()] as episode}
					<button
						class="episode-button"
						on:click={() => (window.location.href = `/animeWatch/${animeInfo.id}/${episode + 1}`)}>
						{episode + 1}
					</button>
				{/each}
			</div>
		</div>
	{/if}

	{#if recommendedAnime.length > 3}
		<div class="recommendation">
			<h3 class="recommendation-title">Recommendations</h3>

			<AnimeRecommendationCarousel {recommendedAnime} />
		</div>
	{/if}
</div>

<style>
	.info-page {
		width: 100%;
		min-height: calc(100vh - 132px);
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		background-color: #0f0f11;
	}

	.primary-image {
		width: auto;
		height: auto;
		border-radius: 0.5rem;
	}

	.secondary-image {
		display: none;
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.title {
		font-size: 1.5rem;
		font-weight: 600;
	}

	.genres {
		font-size: 1.25rem;
		font-weight: 400;
		color: #9e9e9e;
	}

	.details-extra {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.status,
	.duration,
	.episode-count,
	.rating {
		font-size: 1rem;
		font-weight: 400;
		color: #9e9e9e;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.description,
	.episode-selection,
	.recommendation {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.description-title,
	.episode-selection-title,
	.recommendation-title {
		font-size: 1.25rem;
		font-weight: 600;
	}

	.description-text {
		font-size: 1rem;
		font-weight: 400;
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
		.primary-image {
			display: none;
		}

		.secondary-image {
			display: block;
			width: auto;
			height: auto;
			border-radius: 0.5rem;
		}

		.episode-button {
			width: calc((100% - 64px) / 5);
		}
	}
</style>
