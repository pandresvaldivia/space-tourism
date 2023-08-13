import type { Component } from "@builder.io/qwik";
import type { MenuProps as MenuComponentProps } from "./menu";
import { Menu as MenuComponent } from "./menu";
import type { MenuItemProps } from "./menu-item";
import { MenuItem } from "./menu-item";
import type { MenuUnderlineProps } from "./menu-underline";
import { MenuUnderline } from "./menu-underline";

export const Menu: MenuProps = Object.assign(MenuComponent, {
  Item: MenuItem,
  Underline: MenuUnderline,
});

type MenuProps = Component<MenuComponentProps> & {
  Item: Component<MenuItemProps>;
  Underline: Component<MenuUnderlineProps>;
};
