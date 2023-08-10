import { component$ } from "@builder.io/qwik";
import { SidebarMenuItem } from "@atoms";
import type { NavItem } from "@interfaces/services/header";

export const SidebarMenu = component$(({ items }: SidebarMenuProps) => {
  return (
    <ul class="flex flex-col gap-5 text-white">
      {items.map((item) => (
        <SidebarMenuItem key={item.link.label} item={item} />
      ))}
    </ul>
  );
});

type SidebarMenuProps = {
  items: NavItem[];
};
