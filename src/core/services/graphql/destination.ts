export const DESTINATION = `
query Destination($id: String!) {
  Destination(id: $id) {
      id
      name
      description
      travel_time
      distance
      color
      image {
          alt
          url
          filename
          width
          height
      }
  }
}`;

export const DESTINATIONS = `
query Destinations {
  Destinations {
      docs {
          name
          id
      }
  }
}
`;
