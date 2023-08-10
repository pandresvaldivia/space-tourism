import { component$ } from "@builder.io/qwik";
import type { DestinationItem } from "@interfaces/services/destinations";
import { DestinationMenuItem } from "./destination-menu-item";

export const DestinationMenu = component$(({ items }: DestinationMenuProps) => {
  return (
    <ul class="flex gap-6 font-barlow-condensed text-sm md:text-base uppercase">
      {items.map((destination) => (
        <DestinationMenuItem key={destination.slug} destination={destination} />
      ))}
    </ul>
  );
});

type DestinationMenuProps = {
  items: DestinationItem[];
};
