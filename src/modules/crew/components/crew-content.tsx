import { component$ } from "@builder.io/qwik";
import { useCrewContext } from "../providers/crew";
import crewLayoutStyles from "@styles/modules/crew/crew-layout.module.css";
import crewContentStyles from "@styles/modules/crew/crew-content.module.css";
import { getDescriptionWidth } from "../helpers/layout";
import { useCrewTransitionContext } from "../providers/crew-transition";

export const CrewContent = component$(() => {
  const crewMember = useCrewContext();
  const { transition } = useCrewTransitionContext();

  const { title, name, description } = crewMember.value;

  return (
    <section
      key={title}
      class={[
        crewLayoutStyles.content,
        transition,
        "text-center lg:text-left self-end",
        "animate__animated",
      ]}
      aria-label="Crew member information"
    >
      <h1
        class={[
          crewContentStyles.title,
          "font-bellefair uppercase text-white leading-tight opacity-50 mb-2 lg:mb-3",
        ]}
      >
        {title}
      </h1>
      <h2
        class={[
          crewContentStyles.name,
          "text-white leading-tight font-bellefair uppercase mb-4 lg:mb-7",
        ]}
      >
        {name}
      </h2>
      <p
        class={[
          crewContentStyles.description,
          "text-secondary text-sm md:text-base lg:text-lg leading-body mx-auto lg:mx-0",
        ]}
        style={{
          "--description-max-width": getDescriptionWidth(description),
        }}
      >
        {description}
      </p>
    </section>
  );
});
