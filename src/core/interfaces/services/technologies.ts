export type TechnologiesData = {
  Technologies: TechnologiesDocs | null;
};

type TechnologiesDocs = {
  docs: TechnologiesItem[];
};

export interface TechnologiesItem {
  title: string;
  slug: string;
}
