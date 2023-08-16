import type { Metatags } from "./common/metatags";

export type CrewMemberBySlugData = {
  CrewMemberBySlug: CrewMemberBySlugDetails | null;
};

export type CrewMemberBySlugDetails = {
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
