import type { Signal } from "@builder.io/qwik";
import {
  createContextId,
  useContext,
  useContextProvider,
} from "@builder.io/qwik";
import type { DestinationBySlugDetails } from "@interfaces/services/destination-by-slug";

const destinationContext = createContextId<
  Readonly<Signal<DestinationBySlugDetails>>
>("space.destination-context");

export const useDestinationProvider = (
  destination: Readonly<Signal<DestinationBySlugDetails>>
) => {
  useContextProvider(destinationContext, destination);
};

export const useDestinationContext = () => useContext(destinationContext);
