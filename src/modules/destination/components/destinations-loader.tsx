import type { Component } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import type {
  DestinationItem,
  DestinationsData,
} from "@interfaces/services/destinations";
import type { GraphqlGenericResponse } from "@interfaces/services/response";

export const DestinationsLoader = component$(
  ({ response, skeleton: Skeleton, menu: Menu }: DestinationsLoaderProps) => {
    const { data } = response;

    if (!data.Destinations) return <Skeleton />;

    const { docs: items } = data.Destinations;

    return <Menu items={items} />;
  }
);

type DestinationsLoaderProps = {
  response: GraphqlGenericResponse<DestinationsData>;
  skeleton: Component<{}>;
  menu: Component<{ items: DestinationItem[] }>;
};
