import type { Signal } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { DestinationImage } from "./components/destination-image";
import { DestinationContent } from "./components/content/destination-content";
import { useDestinationProvider } from "./providers/destination";
import type { DestinationBySlugDetails } from "@interfaces/services/destination-by-slug";

export const DestinationView = component$(
  ({ destination }: DestinationViewProps) => {
    useDestinationProvider(destination);

    return (
      <>
        <DestinationImage />
        <DestinationContent />
      </>
    );
  }
);

type DestinationViewProps = {
  destination: Readonly<Signal<DestinationBySlugDetails>>;
};
