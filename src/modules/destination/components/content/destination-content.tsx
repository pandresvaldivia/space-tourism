import { component$ } from "@builder.io/qwik";
import { DestinationDescription } from "./destination-description";
import { DestinationDetails } from "./destination-details";
import destinationLayoutStyles from "@styles/modules/destination/destination-layout.module.css";
import destinationContentStyles from "@styles/modules/destination/destination-content.module.css";

export const DestinationContent = component$(() => {
  return (
    <div
      class={[destinationLayoutStyles.content, destinationContentStyles.main]}
    >
      <DestinationDescription />
      <hr
        class={[
          destinationContentStyles.divider,
          "my-8 md:mb-7 lg:mt-0 w-full max-w-xl mx-auto",
        ]}
      />
      <DestinationDetails />
    </div>
  );
});
