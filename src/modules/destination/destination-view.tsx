import { component$ } from "@builder.io/qwik";
import { HeadlineGroup } from "@atoms";
import { DestinationImage } from "./components/destination-image";
import { DestinationContent } from "./components/content/destination-content";
import destinationLayoutStyles from "@styles/modules/destination/destination-layout.module.css";

export const DestinationView = component$(() => {
  return (
    <>
      <HeadlineGroup
        index="01"
        text="Pick your destination"
        class={destinationLayoutStyles.title}
      />
      <DestinationImage />
      <DestinationContent />
    </>
  );
});
