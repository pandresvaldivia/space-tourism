import type { Component } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import type {
  TechnologiesData,
  TechnologiesItem,
} from "@interfaces/services/technologies";
import type { GraphqlGenericResponse } from "@interfaces/services/response";

export const TechnologiesLoader = component$(
  ({ response, skeleton: Skeleton, menu: Menu }: TechnologiesLoaderProps) => {
    const { data } = response;

    if (!data.Technologies) return <Skeleton />;

    const { docs: items } = data.Technologies;

    return <Menu items={items} />;
  }
);

type TechnologiesLoaderProps = {
  response: GraphqlGenericResponse<TechnologiesData>;
  skeleton: Component<{}>;
  menu: Component<{ items: TechnologiesItem[] }>;
};
