import { component$ } from "@builder.io/qwik";
import type { CrewMembersItem } from "@interfaces/services/crew-members";
import { CrewMenuDot } from "./crew-menu-dot";

export const CrewMenu = component$(({ items }: CrewMenuProps) => {
  return (
    <ul class="flex gap-4 lg:gap-6">
      {items.map((crewMember, index) => (
        <CrewMenuDot key={crewMember.slug} member={crewMember} index={index} />
      ))}
    </ul>
  );
});

type CrewMenuProps = {
  items: CrewMembersItem[];
};
