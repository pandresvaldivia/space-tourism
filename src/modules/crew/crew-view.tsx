import type { Signal } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { CrewContent } from "./components/crew-content";
import { CrewImage } from "./components/crew-image";
import { useCrewProvider } from "./providers/crew";
import type { CrewMemberBySlugDetails } from "@interfaces/services/crew-member-by-slug";

export const CrewView = component$(({ crewMember }: CrewViewProps) => {
  useCrewProvider(crewMember);

  return (
    <>
      <CrewContent />
      <CrewImage />
    </>
  );
});

type CrewViewProps = {
  crewMember: Readonly<Signal<CrewMemberBySlugDetails>>;
};
