import type { Signal } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { HeadlineGroup } from "@atoms";
import { DestinationImage } from "./components/destination-image";
import { DestinationContent } from "./components/content/destination-content";
import destinationLayoutStyles from "@styles/modules/destination/destination-layout.module.css";
import { useDestinationProvider } from "./providers/destination";
import type { DestinationBySlugDetails } from "@interfaces/services/destination-by-slug";

export const DestinationView = component$(
  ({ destination }: DestinationViewProps) => {
    useDestinationProvider(destination);

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
  }
);

type DestinationViewProps = {
  destination: Readonly<Signal<DestinationBySlugDetails>>;
};
