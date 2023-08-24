import { component$ } from "@builder.io/qwik";
import type { TechnologiesItem } from "@interfaces/services/technologies";
import { TechnologyMenuItem } from "./technology-menu-item";

export const TechnologyMenu = component$(({ items }: TechnologyMenuProps) => {
  return (
    <ul class="flex lg:flex-col gap-4 lg:gap-8" aria-label="Technologies menu">
      {items.map((technology, index) => (
        <TechnologyMenuItem
          key={technology.slug}
          technology={technology}
          index={index}
        />
      ))}
    </ul>
  );
});

type TechnologyMenuProps = {
  items: TechnologiesItem[];
};
