import { component$ } from "@builder.io/qwik";
import { useCrewContext } from "../providers/crew";
import crewLayoutStyles from "@styles/modules/crew/crew-layout.module.css";

export const CrewContent = component$(() => {
  const { value } = useCrewContext();
  const { title, name, description } = value.data.CrewMemberBySlug;

  return (
    <div class={(crewLayoutStyles.content, "text-center")}>
      <h1 class="font-bellefair uppercase text-white leading-tight opacity-50 mb-2">
        {title}
      </h1>
      <h2 class="text-white text-2xl leading-tight font-bellefair uppercase mb-4">
        {name}
      </h2>
      <p class="text-secondary text-sm md:text-base lg:text-lg leading-body max-w-xl mx-auto">
        {description}
      </p>
    </div>
  );
});
