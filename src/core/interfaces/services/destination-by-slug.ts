import type { Metatags } from "./common/metatags";
import type { GraphqlGenericResponse } from "./response";

export type DestinationBySlugResponse =
  GraphqlGenericResponse<DestinationBySlugData>;

type DestinationBySlugData = {
  DestinationBySlug: DestinationBySlugDetails;
};

type DestinationBySlugDetails = {
  title: string;
  description: string;
  travel_time: string;
  distance: string;
  color: string;
  image: DestinationBySlugImage;
  id: string;
  meta: Metatags;
};

export type DestinationBySlugImage = {
  alt: string;
  filename: string;
  height: number;
  width: number;
  url: string;
};
