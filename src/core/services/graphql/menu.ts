export const HEADER_QUERY = `
query Header {
  Header {
    navItems {
      link {
        type
        url
        label
      }
    }
  }
} `;
