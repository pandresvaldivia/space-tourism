import type { Component } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import type {
  CrewMembersItem,
  CrewMembersResponse,
} from "@interfaces/services/crew-members";

export const CrewMembersLoader = component$(
  ({ response, skeleton: Skeleton, menu: Menu }: CrewMembersLoaderProps) => {
    const { errors, data } = response;

    if (errors) return <Skeleton />;

    const { docs: items } = data.Crews;

    return <Menu items={items} />;
  }
);

type CrewMembersLoaderProps = {
  response: CrewMembersResponse;
  skeleton: Component<{}>;
  menu: Component<{ items: CrewMembersItem[] }>;
};
