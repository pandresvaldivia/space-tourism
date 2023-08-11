import { component$ } from "@builder.io/qwik";
import { HeadlineGroup } from "@atoms";
import crewLayoutStyles from "@styles/modules/crew/crew-layout.module.css";
import { CrewContent } from "./components/crew-content";
import { CrewImage } from "./components/crew-image";

export const CrewView = component$(() => {
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
