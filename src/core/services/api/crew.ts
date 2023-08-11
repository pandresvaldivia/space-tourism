import { fetchGraphql } from "@helpers/graphql";
import { CREW_MEMBER_BY_SLUG } from "../graphql/crew";
import type { CrewMemberBySlugResponse } from "@interfaces/services/crew-member-by-slug";

export const getCrewMemberBySlug = async (
  slug: string
): Promise<CrewMemberBySlugResponse> => {
  return fetchGraphql({ query: CREW_MEMBER_BY_SLUG, variables: { slug } });
};
