import { component$ } from "@builder.io/qwik";
import { ErrorImage, ErrorMessage } from "@atoms";
import destinationLayoutStyles from "@styles/modules/destination/destination-layout.module.css";

export const DestinationNotFound = component$(() => {
  return (
    <>
      <div
        class={[
          destinationLayoutStyles.image,
          "flex items-center justify-center mb-8 pt-28",
        ]}
      >
        <ErrorImage />
      </div>
      <ErrorMessage class={destinationLayoutStyles.content} />
    </>
  );
});
