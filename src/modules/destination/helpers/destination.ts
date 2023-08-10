import { fetchGraphql } from "@helpers/graphql";
import { DESTINATION_BY_SLUG } from "@services/graphql/destination";
import type { DestinationBySlugResponse } from "~/core/interfaces/services/destination-by-slug";

export const getDestinationBySlug = async (
  slug: string
): Promise<DestinationBySlugResponse> => {
  return fetchGraphql({ query: DESTINATION_BY_SLUG, variables: { slug } });
};
