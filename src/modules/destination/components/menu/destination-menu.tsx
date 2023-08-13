import { component$ } from "@builder.io/qwik";
import type { DestinationItem } from "@interfaces/services/destinations";
import { DestinationMenuItem } from "./destination-menu-item";
import { Menu } from "@templates";

export const DestinationMenu = component$(({ items }: DestinationMenuProps) => {
  return (
    <Menu class="flex gap-6 font-barlow-condensed text-sm md:text-base uppercase">
      {items.map((destination) => (
        <DestinationMenuItem key={destination.slug} destination={destination} />
      ))}
      <Menu.Underline class="h-1 bg-white" />
    </Menu>
  );
});

type DestinationMenuProps = {
  items: DestinationItem[];
};
