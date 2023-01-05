<script>
	import { fetchSearchResults } from "../utils/fetch";

	let key = false;
	let searchTerm = "";
	let searchResults = [];

	const toggle = () => {
		key = !key;

		if (!key) {
			document.getElementsByTagName("body")[0].style.overflow = "auto";
		} else {
			document.getElementsByTagName("body")[0].style.overflow = "hidden";
		}
	};

	const search = async () => {
		const res = await fetchSearchResults(searchTerm);
		searchResults = res;
	};
</script>

<div class="drawer">
	<button class="drawer-button" on:click={toggle}>
		<svg
			width="28px"
			height="28px"
			fill="#e0e0e0"
			stroke="#e0e0e0"
			stroke-width="0"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg">
			<g>
				<path fill="none" d="M0 0h24v24H0z" />
				<path
					d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
			</g>
		</svg>
	</button>

	{#if key}
		<div class="drawer-content">
			<div class="drawer-content-header">
				<h2 class="drawer-content-header-title">Search</h2>

				<button class="drawer-button" on:click={toggle}>
					<svg
						width="28px"
						height="28px"
						fill="#e0e0e0"
						stroke="#e0e0e0"
						stroke-width="0"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<g>
							<path fill="none" d="M0 0h24v24H0z" />
							<path
								d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
						</g>
					</svg>
				</button>
			</div>

			<div class="drawer-content-body">
				<div class="anime-search">
					<input class="anime-search-input" type="text" bind:value={searchTerm} />

					<button class="anime-search-button" on:click={search}>Search</button>
				</div>

				<div class="anime-search-results">
					{#each searchResults as anime, i (i)}
						<div class="card">
							<a href={`/animeInfo/${anime.id}`} on:click={toggle}>
								<img
									class="card-image"
									src={anime.coverImage.large}
									alt={anime.title.english ? anime.title.english : anime.title.userPreferred} />
							</a>

							<div class="card-details">
								<h3 class="card-title">{anime.title.english ? anime.title.english : anime.title.userPreferred}</h3>

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
			</div>

			<div class="drawer-content-footer" />
		</div>
	{/if}
</div>

<style>
	.drawer-button {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.drawer-content {
		z-index: 2;
		width: 400px;
		height: 100vh;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: #0f0f11;
	}

	.drawer-content-header {
		width: 100%;
		height: 60px;
		padding: 0 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.drawer-content-header-title {
		font-size: 1.25rem;
		font-weight: 600;
	}

	.drawer-content-body {
		width: 100%;
		height: calc(100vh - 92px);
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.anime-search {
		width: 100%;
		display: flex;
		gap: 1rem;
	}

	.anime-search-input {
		flex: 3;
		width: 100%;
		height: 40px;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		border: 1px solid#ff8a65;
		font-size: 1rem;
		color: #e0e0e0;
		background-color: inherit;
	}

	.anime-search-button {
		flex: 1;
		width: 100%;
		height: 40px;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		border: 1px solid#ff8a65;
		font-size: 1rem;
	}

	.anime-search-button:hover {
		transform: scale(1.025);
		transition: all 0.2s ease-in-out;
	}

	.anime-search-results {
		width: 100%;
		height: calc(100vh - 164px);
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.card {
		width: 100%;
		display: flex;
		gap: 1rem;
	}

	.card-image {
		width: 200px;
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

	@media only screen and (max-width: 640px) {
		.drawer-content {
			width: 100vw;
			left: 0;
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
