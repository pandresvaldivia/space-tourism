import { component$ } from "@builder.io/qwik";
import crewLayoutStyles from "@styles/modules/crew/crew-layout.module.css";
import { ErrorImage, ErrorMessage } from "@atoms";

export const CrewNotFound = component$(() => {
  return (
    <>
      <div
        class={[
          crewLayoutStyles.image,
          "flex items-center justify-center mb-8 pt-28",
        ]}
      >
        <ErrorImage />
      </div>
      <ErrorMessage class={crewLayoutStyles.content} />
    </>
  );
});
