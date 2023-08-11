export const DESTINATION_BY_SLUG = `
query DestinationBySlug($slug: String!) {
  DestinationBySlug(slug: $slug) {
    title
    description
    slug
    distance
    travel_time
    color
    image {
      alt
      url
      width
      height
    }
    meta {
      title
      description
      image {
        url
      }
    }
  }
}`;

export const DESTINATIONS = `
query Destinations {
  Destinations(sort: "createAt") {
    docs {
      slug
      title
    }
  }
}`;
