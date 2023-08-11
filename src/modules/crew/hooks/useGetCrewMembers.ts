import { useGraphql } from "@hooks";
import { CREW_MEMBERS } from "@services/graphql/crew";
import type { CrewMembersResponse } from "@interfaces/services/crew-members";

export const useGetCrewMembers = () => {
  const crewMembersResponse = useGraphql<CrewMembersResponse>(CREW_MEMBERS);

  return { crewMembersResponse };
};
