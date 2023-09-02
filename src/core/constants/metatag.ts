export enum DefaultMetadata {
  TITLE = "Space Tourism",
  DESCRIPTION = "So, you want to travet to space?",
  IMAGE = "/images/space-tourism-og.webp",
}

export const NOT_FOUND_TITLE = "404 | Space Tourism";

export const NOT_FOUND_METADATA = {
  title: NOT_FOUND_TITLE,
  meta: [
    {
      name: "description",
      content: DefaultMetadata.DESCRIPTION,
    },
  ],
};
