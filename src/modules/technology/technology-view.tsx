import type { Signal } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { useTechnologyProvider } from "./providers/technology";
import type { TechnologyBySlugDetails } from "@interfaces/services/technology-by-slug";
import { TechnologyContent } from "./components/technology-content";
import { TechologyImage } from "./components/techology-image";

export const TechnologyView = component$(
  ({ technology }: TechnologyViewProps) => {
    useTechnologyProvider(technology);

    return (
      <>
        <TechologyImage />
        <TechnologyContent />
      </>
    );
  }
);

type TechnologyViewProps = {
  technology: Readonly<Signal<TechnologyBySlugDetails>>;
};
