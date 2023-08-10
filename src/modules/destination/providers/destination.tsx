import type { Signal } from "@builder.io/qwik";
import {
  createContextId,
  useContext,
  useContextProvider,
} from "@builder.io/qwik";
import type { DestinationBySlugResponse } from "~/core/interfaces/services/destination-by-slug";

const destinationContext = createContextId<
  Readonly<Signal<DestinationBySlugResponse>>
>("space.destination-context");

export const useDestinationProvider = (
  destination: Readonly<Signal<DestinationBySlugResponse>>
) => {
  useContextProvider(destinationContext, destination);
};

export const useDestinationContext = () => useContext(destinationContext);
