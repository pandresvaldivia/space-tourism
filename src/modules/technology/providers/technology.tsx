import type { Signal } from "@builder.io/qwik";
import {
  createContextId,
  useContext,
  useContextProvider,
} from "@builder.io/qwik";
import type { TechnologyBySlugDetails } from "@interfaces/services/technology-by-slug";

const technologyContext = createContextId<
  Readonly<Signal<TechnologyBySlugDetails>>
>("space.technology-context");

export const useTechnologyProvider = (
  technology: Readonly<Signal<TechnologyBySlugDetails>>
) => {
  useContextProvider(technologyContext, technology);
};

export const useTechnologyContext = () => useContext(technologyContext);
