import { component$ } from "@builder.io/qwik";
import type { CrewMembersItem } from "@interfaces/services/crew-members";
import { CrewMenuDot } from "./crew-menu-dot";

export const CrewMenu = component$(({ items }: CrewMenuProps) => {
  return (
    <ul class="flex gap-4">
      {items.map((crewMember) => (
        <CrewMenuDot key={crewMember.slug} member={crewMember} />
      ))}
    </ul>
  );
});

type CrewMenuProps = {
  items: CrewMembersItem[];
};
