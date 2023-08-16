export type CrewMembersData = {
  Crews: CrewMembersDocs | null;
};

type CrewMembersDocs = {
  docs: CrewMembersItem[];
};

export interface CrewMembersItem {
  title: string;
  slug: string;
}
