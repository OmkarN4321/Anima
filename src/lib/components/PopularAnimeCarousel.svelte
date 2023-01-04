<script>
	import "@splidejs/svelte-splide/css";
	import { Splide, SplideSlide } from "@splidejs/svelte-splide";

	export let popularAnime;
	const options = {
		perPage: 1,
		type: "loop",
		rewind: true,
		width: "100%",
		pagination: false,
		breakpoints: {
			1024: {
				autoWidth: true,
				focus: "center",
				gap: "24px"
			},
			640: {
				gap: "16px"
			}
		}
	};
</script>

{#if popularAnime}
	<Splide aria-label="Popular anime" {options}>
		{#each popularAnime as anime, i (i)}
			<SplideSlide>
				<a href={`/animeInfo/${anime.id}`}>
					<div class="card">
						<img class="card-primary-image" src={anime.bannerImage} alt={anime.title.english} />
						<img class="card-secondary-image" src={anime.coverImage.extraLarge} alt={anime.title.english} />

						<div class="card-details">
							<h3 class="card-title">{anime.title.english}</h3>

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
						</div>
					</div>
				</a>
			</SplideSlide>
		{/each}
	</Splide>
{/if}

<style>
	.card {
		width: 100%;
		height: auto;
		position: relative;
		border-radius: 0.25rem;
	}

	.card-primary-image {
		width: 100%;
		height: 400px;
		object-fit: cover;
		border: 1px solid #616161;
		border-radius: 0.25rem;
	}

	.card-secondary-image {
		display: none;
	}

	.card-details {
		padding: 0.5rem;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 0.25rem;
		box-shadow: 0 -15px 20px 5px rgba(0, 0, 0, 0.4);
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 100%);
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

	@media only screen and (max-width: 1024px) {
		.card {
			width: auto;
		}

		.card-primary-image {
			display: none;
		}

		.card-secondary-image {
			display: block;
			width: auto;
			height: 450px;
			border: 1px solid #616161;
			border-radius: 0.25rem;
		}
	}
</style>
