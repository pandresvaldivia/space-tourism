import { component$ } from "@builder.io/qwik";
import { useTechnologyContext } from "../providers/technology";
import technologyLayoutStyles from "@styles/modules/technology/technology-layout.module.css";
import technologyContentStyles from "@styles/modules/technology/technology-content.module.css";
import { useSlideTransitionContext } from "@contexts";

export const TechnologyContent = component$(() => {
  const technology = useTechnologyContext();
  const { title, description } = technology.value;
  const { transition } = useSlideTransitionContext();

  return (
    <section
      key={title}
      class={[
        technologyLayoutStyles.content,
        technologyContentStyles.main,
        transition,
        "text-center lg:text-left mx-auto px-6 md:px-10 lg:px-0 w-full",
        "animate__animated",
      ]}
      aria-label="Technology information"
    >
      <p class="text-secondary text-sm md:text-base leading-tight tracking-subtitle font-barlow-condensed uppercase mb-2 md:mb-4 lg:mb-3">
        The terminology...
      </p>
      <h1
        class={[
          technologyContentStyles.title,
          "text-white font-bellefair leading-tight uppercase mb-4 whitespace-nowrap",
        ]}
      >
        {title}
      </h1>
      <p
        class={[
          technologyContentStyles.description,
          "text-secondary hyphens-auto leading-body lg:text-lg",
        ]}
      >
        {description}
      </p>
    </section>
  );
});
