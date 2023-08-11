import type { GraphqlGenericResponse } from "./response";

export type CrewMembersResponse = GraphqlGenericResponse<CrewMembersData>;

type CrewMembersData = {
  Crews: CrewMembersDocs;
};

type CrewMembersDocs = {
  docs: CrewMembersItem[];
};

export interface CrewMembersItem {
  title: string;
  slug: string;
}
