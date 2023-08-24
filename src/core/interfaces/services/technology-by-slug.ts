import type { Metatags } from "./common/metatags";

export type TechnologyBySlugData = {
  TechnologyBySlug: TechnologyBySlugDetails | null;
};

export type TechnologyBySlugDetails = {
  title: string;
  description: string;
  image: TechnologyBySlugImage;
  id: string;
  meta: Metatags;
};

export type TechnologyBySlugImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};
