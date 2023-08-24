import { fetchGraphql } from "@helpers/graphql";
import type { TechnologyBySlugData } from "@interfaces/services/technology-by-slug";
import { TECHNOLOGY_BY_SLUG } from "../graphql/technology";

export const getTechnologyBySlug = async (
  slug: string
): Promise<TechnologyBySlugData> => {
  const data = await fetchGraphql<TechnologyBySlugData>({
    query: TECHNOLOGY_BY_SLUG,
    variables: { slug },
  });

  return data.data;
};
