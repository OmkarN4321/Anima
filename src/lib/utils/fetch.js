import { gql, request } from "graphql-request";

export const fetchBasicAnimeData = async (sortType) => {
	const query = gql`
    {
      Page(perPage: 10) {
        media(sort: ${sortType}, type: ANIME, status: FINISHED) {
          id
          meanScore
          bannerImage
          title {
            english
          }
          coverImage{
            extraLarge
          }
        }
      }
    }
  `;
	const fetchedData = await request("https://graphql.anilist.co", query);

	if (fetchedData?.Page?.media) {
		return fetchedData.Page.media;
	} else {
		return null;
	}
};

export const fetchPaginatedAnimeData = async (sortType, pageNo) => {
	const query = gql`
    {
      Page(perPage: 10, page: ${pageNo}) {
          media(sort: ${sortType}, type: ANIME, status: FINISHED) {
            id
            season
            episodes
            meanScore
            seasonYear
            title {
              english
            }
            coverImage {
              large
            }
          }
      }
    }
  `;
	const fetchedData = await request("https://graphql.anilist.co", query);

	if (fetchedData?.Page?.media) {
		return fetchedData.Page.media;
	} else {
		return null;
	}
};

export const fetchAdvAnimeData = async (id) => {
	const query = gql`
    {
      info: Media(id: ${id}) {
        id
        status
        genres
        episodes
        duration
        meanScore
        description
        bannerImage
        coverImage{
          extraLarge
        }
        title {
          english
          userPreferred
        }
      }
    }
  `;
	const fetchedData = await request("https://graphql.anilist.co", query);

	if (fetchedData?.info) {
		return fetchedData.info;
	} else {
		return null;
	}
};

export const fetchAnimeRecommendations = async (id) => {
	const query = gql`
    {
      Page(perPage: 5, page: 1) {
        recommendations(mediaRecommendationId: ${id} sort: RATING_DESC) {
          media {
            id
            meanScore
            title {
              english
              userPreferred
            }
            coverImage {
              large
            }
          }
        }
      }
    }
  `;
	const fetchedData = await request("https://graphql.anilist.co", query);

	if (fetchedData?.Page?.recommendations) {
		return fetchedData.Page.recommendations;
	} else {
		return null;
	}
};

export const fetchSearchResults = async (searchTerm) => {
	const query = gql`
  {
    search: Page(perPage: 5, page: 1) {
      media(search: "${searchTerm}", sort: SEARCH_MATCH, type:ANIME) {
        id
        season
        episodes
        meanScore
        seasonYear
        title {
          english
          userPreferred
        }
        coverImage {
          large
        }
      }
    }
  }
  `;
	const fetchedData = await request("https://graphql.anilist.co", query);

	if (fetchedData?.search?.media) {
		return fetchedData.search.media;
	} else {
		return null;
	}
};
