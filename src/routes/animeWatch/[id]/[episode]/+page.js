import { magic } from "$lib/utils/scrapper";
import { gql, request } from "graphql-request";

export const load = async ({ params }) => {
	const { id, episode } = params;
	const query = gql`
      {
        info: Media(id: ${params.id}) {
          title {
            english
            userPreferred 
          }
          episodes
        }
      }
    `;

	const data = await request("https://graphql.anilist.co", query);
	const primaryVideoLink = await magic(data?.info?.title?.english, episode);
	const secondaryVideoLink = await magic(data?.info?.title?.userPreferred, episode);

	return {
		id,
		episode,
		animeInfo: data.info,
		videoLinks: {
			primaryVideoLink,
			secondaryVideoLink
		}
	};
};

export let csr = false;
