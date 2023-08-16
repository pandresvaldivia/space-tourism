import type { Signal } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { HeadlineGroup } from "@atoms";
import crewLayoutStyles from "@styles/modules/crew/crew-layout.module.css";
import { CrewContent } from "./components/crew-content";
import { CrewImage } from "./components/crew-image";
import { useCrewProvider } from "./providers/crew";
import type { CrewMemberBySlugDetails } from "@interfaces/services/crew-member-by-slug";

export const CrewView = component$(({ crewMember }: CrewViewProps) => {
  useCrewProvider(crewMember);

  return (
    <>
      <HeadlineGroup
        index="02"
        text="Meet your crew"
        class={crewLayoutStyles.title}
      />
      <CrewContent />
      <CrewImage />
    </>
  );
});

type CrewViewProps = {
  crewMember: Readonly<Signal<CrewMemberBySlugDetails>>;
};
