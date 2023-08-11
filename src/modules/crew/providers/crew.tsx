import type { Signal } from "@builder.io/qwik";
import {
  createContextId,
  useContext,
  useContextProvider,
} from "@builder.io/qwik";
import type { CrewMemberBySlugResponse } from "~/core/interfaces/services/crew-member-by-slug";

const crewContext =
  createContextId<Readonly<Signal<CrewMemberBySlugResponse>>>(
    "space.crew-context"
  );

export const useCrewProvider = (
  crew: Readonly<Signal<CrewMemberBySlugResponse>>
) => {
  useContextProvider(crewContext, crew);
};

export const useCrewContext = () => useContext(crewContext);
