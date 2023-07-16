export const MENU_QUERY = `{
  Menus(sort:"id"){
    docs{
      id,
      name,
      link
    }
  }
}`;
