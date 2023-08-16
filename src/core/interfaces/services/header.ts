export type HeaderData = {
  Header: HeaderNavItems | null;
};

type HeaderNavItems = {
  navItems: NavItem[];
};

export type NavItem = {
  link: NavItemLink;
};

type NavItemLink = {
  type: NavItemType;
  url: string;
  label: string;
};

export enum NavItemType {
  REFERENCE = "reference",
  CUSTOM = "custom",
}
