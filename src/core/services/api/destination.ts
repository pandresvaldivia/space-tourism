import { fetchGraphql } from "@helpers/graphql";
import { DESTINATION_BY_SLUG } from "@services/graphql/destination";
import type { DestinationBySlugData } from "@interfaces/services/destination-by-slug";

export const getDestinationBySlug = async (
  slug: string
): Promise<DestinationBySlugData> => {
  const data = await fetchGraphql<DestinationBySlugData>({
    query: DESTINATION_BY_SLUG,
    variables: { slug },
  });

  return data.data;
};
