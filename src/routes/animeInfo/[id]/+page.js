import { fetchAdvAnimeData, fetchAnimeRecommendations } from "../../../lib/utils/fetch";

export const load = async ({ params }) => {
	const animeInfo = await fetchAdvAnimeData(params.id);
	const recommendedAnime = await fetchAnimeRecommendations(params.id);

	return {
		animeInfo,
		recommendedAnime
	};
};
