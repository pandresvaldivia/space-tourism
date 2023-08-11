export const CREW_MEMBER_BY_SLUG = `
query CrewMemberBySlug($slug: String!) {
  CrewMemberBySlug(slug: $slug) {
    title
    name
    description
    image {
      alt
      url
      height
      width
    }
    meta {
      description
      title
      image {
        url
      }
    }
  }
}`;

export const CREW_MEMBERS = `
query Crews {
  Crews(sort: "createAt") {
    docs {
      title
      slug
    }
  }
}`;
