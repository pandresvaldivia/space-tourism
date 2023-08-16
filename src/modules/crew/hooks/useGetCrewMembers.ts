import { useGraphql } from "@hooks";
import { CREW_MEMBERS } from "@services/graphql/crew";
import type { CrewMembersData } from "@interfaces/services/crew-members";

export const useGetCrewMembers = () => {
  const crewMembersResponse = useGraphql<CrewMembersData>(CREW_MEMBERS);

  return { crewMembersResponse };
};
