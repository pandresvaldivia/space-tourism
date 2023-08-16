import type { Signal } from "@builder.io/qwik";
import {
  createContextId,
  useContext,
  useContextProvider,
} from "@builder.io/qwik";
import type { CrewMemberBySlugDetails } from "@interfaces/services/crew-member-by-slug";

const crewContext =
  createContextId<Readonly<Signal<CrewMemberBySlugDetails>>>(
    "space.crew-context"
  );

export const useCrewProvider = (
  crew: Readonly<Signal<CrewMemberBySlugDetails>>
) => {
  useContextProvider(crewContext, crew);
};

export const useCrewContext = () => useContext(crewContext);
