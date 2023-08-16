import { component$, type Component } from "@builder.io/qwik";
import type { HeaderData, NavItem } from "@interfaces/services/header";
import type { GraphqlGenericResponse } from "@interfaces/services/response";

export const LoaderMenu = component$(
  ({ response, skeleton: Skeleton, menu: Menu }: LoaderMenuProps) => {
    const { data } = response;

    if (!data.Header) return <Skeleton />;

    const { navItems: items } = data.Header;

    return <Menu items={items} />;
  }
);

type LoaderMenuProps = {
  response: GraphqlGenericResponse<HeaderData>;
  skeleton: Component<{}>;
  menu: Component<{ items: NavItem[] }>;
};
