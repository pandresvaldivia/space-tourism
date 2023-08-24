import { Resource, component$ } from "@builder.io/qwik";
import useGetTechnologies from "../../hooks/useGetTechnologies";
import { TechnologiesLoader } from "../technologies-loader";
import { TechnologyMenu } from "./technology-menu";
import { SkeletonTechnologyMenu } from "../skeleton/skeleton-technology-menu";
import technologyLayoutStyles from "@styles/modules/technology/technology-layout.module.css";

export const TechnologyNav = component$(() => {
  const technologies = useGetTechnologies();

  return (
    <nav
      aria-label="Technologies menu"
      class={[technologyLayoutStyles.menu, "mx-auto mb-6 md:mb-11 lg:mb-0"]}
    >
      <Resource
        value={technologies}
        onResolved={(technologies) => (
          <TechnologiesLoader
            response={technologies}
            menu={TechnologyMenu}
            skeleton={SkeletonTechnologyMenu}
          />
        )}
        onPending={() => <SkeletonTechnologyMenu />}
      />
    </nav>
  );
});
