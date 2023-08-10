import { component$ } from "@builder.io/qwik";
import { useDestinationContext } from "../../providers/destination";

import destinationDescriptionStyles from "@styles/modules/destination/destination-description.module.css";

export const DestinationDescription = component$(() => {
  const { value } = useDestinationContext();
  const { title, description } = value.data!.DestinationBySlug;

  return (
    <section
      class={[destinationDescriptionStyles.main, "text-center lg:text-left"]}
      aria-label="Destination description"
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
