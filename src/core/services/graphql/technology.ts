export const TECHNOLOGY_BY_SLUG = `
query TechnologyBySlug($slug: String!) {
  TechnologyBySlug(slug: $slug) {
    title
    description
    image {
      url
      width
      height
      alt
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

export const TECHNOLOGIES = `
query Technologies {
  Technologies(sort: "createAt") {
    docs {
      slug
      title
    }
  }
}`;
