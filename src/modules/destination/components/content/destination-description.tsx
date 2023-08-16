import { component$ } from "@builder.io/qwik";
import { useDestinationContext } from "../../providers/destination";

import destinationDescriptionStyles from "@styles/modules/destination/destination-description.module.css";
import { useLocation } from "@builder.io/qwik-city";

export const DestinationDescription = component$(() => {
  const { pathname } = useLocation().url;
  const destination = useDestinationContext();

  const { title, description } = destination.value;

  return (
    <section
      key={pathname}
      class={[
        destinationDescriptionStyles.main,
        "text-center lg:text-left",
        "animate__animated",
      ]}
      aria-label="Destination information"
    >
      <h1
        class={[
          destinationDescriptionStyles.title,
          "leading-tight text-white font-bellefair uppercase md:mb-2",
        ]}
      >
        {title}
      </h1>
      <p class="text-secondary text-sm md:text-base lg:text-lg leading-body max-w-xl mx-auto">
        {description}
      </p>
    </section>
  );
});
