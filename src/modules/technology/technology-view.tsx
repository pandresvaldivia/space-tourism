import type { Signal } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { useTechnologyProvider } from "./providers/technology";
import type { TechnologyBySlugDetails } from "@interfaces/services/technology-by-slug";
import { TechnologyContent } from "./components/technology-content";
import technologyLayoutStyles from "@styles/modules/technology/technology-layout.module.css";
import { HeadlineGroup } from "@atoms";
import { TechologyImage } from "./components/techology-image";

export const TechnologyView = component$(
  ({ technology }: TechnologyViewProps) => {
    useTechnologyProvider(technology);

    return (
      <>
        <div class={[technologyLayoutStyles.title, "px-6 md:px-10 lg:px-0"]}>
          <HeadlineGroup index="03" text="Space launch 101" class="lg:mb-6" />
        </div>
        <TechologyImage />
        <TechnologyContent />
      </>
    );
  }
);

type TechnologyViewProps = {
  technology: Readonly<Signal<TechnologyBySlugDetails>>;
};
