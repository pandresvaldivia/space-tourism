import { fetchGraphql } from "@helpers/graphql";
import { CREW_MEMBER_BY_SLUG } from "../graphql/crew";
import type { CrewMemberBySlugData } from "@interfaces/services/crew-member-by-slug";

export const getCrewMemberBySlug = async (
  slug: string
): Promise<CrewMemberBySlugData> => {
  const data = await fetchGraphql<CrewMemberBySlugData>({
    query: CREW_MEMBER_BY_SLUG,
    variables: { slug },
  });

  return data.data;
};
