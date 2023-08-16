import type { Component } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import type {
  CrewMembersData,
  CrewMembersItem,
} from "@interfaces/services/crew-members";
import type { GraphqlGenericResponse } from "@interfaces/services/response";

export const CrewMembersLoader = component$(
  ({ response, skeleton: Skeleton, menu: Menu }: CrewMembersLoaderProps) => {
    const { data } = response;

    if (!data.Crews) return <Skeleton />;

    const { docs: items } = data.Crews;

    return <Menu items={items} />;
  }
);

type CrewMembersLoaderProps = {
  response: GraphqlGenericResponse<CrewMembersData>;
  skeleton: Component<{}>;
  menu: Component<{ items: CrewMembersItem[] }>;
};
