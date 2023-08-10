import { component$ } from "@builder.io/qwik";
import { NavMenuItem } from "@atoms";
import type { NavItem } from "@interfaces/services/header";

export const HeaderMenu = component$(({ items }: HeaderMenuProps) => {
  return (
    <ul class="flex gap-12 text-white h-full">
      {items.map((item, index) => (
        <NavMenuItem key={item.link.label} index={index} item={item} />
      ))}
    </ul>
  );
});

type HeaderMenuProps = {
  items: NavItem[];
};
