<script>
	import "@splidejs/svelte-splide/css";
	import { Splide, SplideSlide } from "@splidejs/svelte-splide";

	export let recommendedAnime;
	const options = {
		perPage: 1,
		gap: "24px",
		rewind: true,
		width: "100%",
		focus: "center",
		autoWidth: true,
		pagination: false,
		breakpoints: {
			640: {
				gap: "16px"
			}
		}
	};
</script>

<Splide aria-label="Recommended anime" {options}>
	{#each recommendedAnime as anime (anime.media.id)}
		<SplideSlide>
			<a href={`/animeInfo/${anime.media.id}`} target="_parent">
				<div class="card">
					<img
						class="card-image"
						src={anime.media.coverImage.large}
						alt={anime.media.title.english ? anime.media.title.english : anime.media.title.userPreferred} />

					<div class="card-details">
						<h3 class="card-title">
							{anime.media.title.english ? anime.media.title.english : anime.media.title.userPreferred}
						</h3>

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

							{anime.media.meanScore / 10}
						</p>
					</div>
				</div>
			</a>
		</SplideSlide>
	{/each}
</Splide>

<style>
	.card {
		width: 100%;
		height: auto;
		position: relative;
		border-radius: 0.25rem;
	}

	.card-image {
		width: auto;
		height: 350px;
		border-radius: 0.25rem;
	}

	.card-details {
		padding: 0.5rem;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 0.25rem;
		box-shadow: 0 -15px 20px 5px rgba(0, 0, 0, 0.2);
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.2) 100%);
	}

	.card-title {
		font-size: 1.25rem;
		font-weight: 600;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.card-rating {
		font-size: 1rem;
		font-weight: 400;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
