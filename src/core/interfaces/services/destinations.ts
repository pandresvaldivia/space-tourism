export type DestinationsData = {
  Destinations: DestinationDocs | null;
};

type DestinationDocs = {
  docs: DestinationItem[];
};

export type DestinationItem = {
  slug: string;
  title: string;
};
