import type { GraphqlGenericResponse } from "./response";

export type HeaderResponse = GraphqlGenericResponse<HeaderData>;

type HeaderData = {
  Header: HeaderNavItems;
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
