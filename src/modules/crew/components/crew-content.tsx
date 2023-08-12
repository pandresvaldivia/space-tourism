import { component$ } from "@builder.io/qwik";
import { useCrewContext } from "../providers/crew";
import crewLayoutStyles from "@styles/modules/crew/crew-layout.module.css";
import crewContentStyles from "@styles/modules/crew/crew-content.module.css";
import { getDescriptionWidth } from "../helpers/layout";

export const CrewContent = component$(() => {
  const { value } = useCrewContext();
  const { title, name, description } = value.data.CrewMemberBySlug;

  return (
    <div
      class={[crewLayoutStyles.content, "text-center lg:text-left self-end"]}
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
    </div>
  );
});
