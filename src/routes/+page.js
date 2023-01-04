import { fetchBasicAnimeData, fetchPaginatedAnimeData } from "../lib/utils/fetch";

export const load = async ({ setHeaders }) => {
	const popularAnime = await fetchBasicAnimeData("POPULARITY_DESC");
	const topRatedAnime = await fetchPaginatedAnimeData("SCORE_DESC", 1);
	const trendingAnime = await fetchPaginatedAnimeData("TRENDING_DESC", 1);
	const favouriteAnime = await fetchPaginatedAnimeData("FAVOURITES_DESC", 1);

	setHeaders({
		"cache-control": "public, max-age=172800, stale-while-revalidate=86400"
	});

	return {
		popularAnime,
		trendingAnime,
		topRatedAnime,
		favouriteAnime
	};
};
