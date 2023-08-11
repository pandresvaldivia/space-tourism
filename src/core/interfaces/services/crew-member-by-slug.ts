import type { Metatags } from "./common/metatags";
import type { GraphqlGenericResponse } from "./response";

export type CrewMemberBySlugResponse =
  GraphqlGenericResponse<CrewMemberBySlugData>;

type CrewMemberBySlugData = {
  CrewMemberBySlug: CrewMemberBySlugDetails;
};

type CrewMemberBySlugDetails = {
  title: string;
  name: string;
  description: string;
  image: CrewMemberBySlugImage;
  meta: Metatags;
};

export interface CrewMemberBySlugImage {
  alt: string;
  url: string;
  height: number;
  width: number;
}
