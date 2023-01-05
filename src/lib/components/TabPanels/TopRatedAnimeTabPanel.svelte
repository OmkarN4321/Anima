<script>
	import { fetchPaginatedAnimeData } from "../../utils/fetch";

	export let topRatedAnime;
	let topRatedAnimePageNo = 1;

	const loadTopRatedAnime = async () => {
		topRatedAnimePageNo++;

		const res = await fetchPaginatedAnimeData("SCORE_DESC", topRatedAnimePageNo);
		topRatedAnime = topRatedAnime.concat(res);
	};
</script>

<div class="tab-panel">
	<div class="card-display">
		{#each topRatedAnime as anime, i (i)}
			<div class="card">
				<a href={`/animeInfo/${anime.id}`}>
					<img class="card-image" src={anime.coverImage.large} alt={anime.title.english} />
				</a>

				<div class="card-details">
					<h3 class="card-title">{anime.title.english}</h3>

					<div class="card-sub-details">
						<p class="card-rating">
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

							{anime.meanScore / 10}
						</p>

						<p class="card-episodes">
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

							{anime.episodes}
						</p>
					</div>

					<p class="card-season">{anime.season} {anime.seasonYear}</p>
				</div>
			</div>
		{/each}
	</div>

	<button class="load-more-button" on:click={loadTopRatedAnime}>Load more</button>
</div>

<style>
	.tab-panel {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	.card-display {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		row-gap: 2rem;
		column-gap: 1.5rem;
		justify-content: center;
	}

	.card {
		width: calc((100% - 96px) / 5);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.card-image {
		width: 100%;
		height: 100%;
		aspect-ratio: 0.7;
		border-radius: 0.25rem;
		object-fit: cover;
	}

	.card-details {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.card-title {
		font-size: 1.25rem;
		font-weight: 600;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.card-sub-details {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.card-rating,
	.card-episodes,
	.card-season {
		font-size: 1rem;
		font-weight: 400;
		color: #9e9e9e;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.load-more-button {
		width: max-content;
		height: 40px;
		padding: 0.25rem 0.5rem;
		font-size: 1rem;
		border: 1px solid #ff8a65;
		border-radius: 0.25rem;
	}

	.load-more-button:hover {
		transform: scale(1.025);
		transition: all 0.2s ease-in-out;
	}

	@media only screen and (max-width: 640px) {
		.card-display {
			row-gap: 1.5rem;
			column-gap: 1rem;
		}

		.card {
			width: calc((100% - 16px) / 2);
		}

		.card-title {
			font-size: 1rem;
		}

		.card-rating,
		.card-episodes,
		.card-season {
			font-size: 0.75rem;
		}
	}
</style>
