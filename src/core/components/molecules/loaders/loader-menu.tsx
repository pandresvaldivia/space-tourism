import { component$, type Component } from "@builder.io/qwik";
import type { HeaderResponse, NavItem } from "@interfaces/services/header";

export const LoaderMenu = component$(
  ({ response, skeleton: Skeleton, menu: Menu }: LoaderMenuProps) => {
    const { errors, data } = response;

    if (errors || !data) return <Skeleton />;

    const { navItems: items } = data.Header;

    return <Menu items={items} />;
  }
);

type LoaderMenuProps = {
  response: HeaderResponse;
  skeleton: Component<{}>;
  menu: Component<{ items: NavItem[] }>;
};
