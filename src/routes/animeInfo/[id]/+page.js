import { fetchAdvAnimeData, fetchAnimeRecommendations } from "../../../lib/utils/fetch";

export const load = async ({ params, setHeaders }) => {
	const animeInfo = await fetchAdvAnimeData(params.id);
	const recommendedAnime = await fetchAnimeRecommendations(params.id);

	setHeaders({
		"cache-control": "public, max-age=172800, stale-while-revalidate=86400"
	});

	return {
		animeInfo,
		recommendedAnime
	};
};
