import type { GraphqlGenericResponse } from "./response";

export type DestinationsResponse = GraphqlGenericResponse<DestinationsData>;

type DestinationsData = {
  Destinations: DestinationDocs;
};

type DestinationDocs = {
  docs: DestinationItem[];
};

export type DestinationItem = {
  slug: string;
  title: string;
};
