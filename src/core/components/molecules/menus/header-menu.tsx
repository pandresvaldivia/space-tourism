import { component$ } from "@builder.io/qwik";
import { NavMenuItem } from "@atoms";
import type { NavItem } from "@interfaces/services/header";
import { Menu } from "@templates";

export const HeaderMenu = component$(({ items }: HeaderMenuProps) => {
  return (
    <Menu class="relative flex gap-12 text-white h-full">
      {items.map((item, index) => (
        <NavMenuItem key={item.link.label} index={index} item={item} />
      ))}
      <Menu.Underline class="h-1 bg-white" />
    </Menu>
  );
});

type HeaderMenuProps = {
  items: NavItem[];
};
