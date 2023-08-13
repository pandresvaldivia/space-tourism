import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { useCurrentPath } from "@hooks";
import type { DestinationItem } from "@interfaces/services/destinations";
import { Menu } from "@templates";

export const DestinationMenuItem = component$(
  ({ destination }: DestinationMenuItemProps) => {
    const { isCurrentPath } = useCurrentPath();

    const { slug, title } = destination;
    const path = `/destinations/${slug}/`;
    const isActive = isCurrentPath(path);

    return (
      <Menu.Item active={isActive}>
        <Link
          href={path}
          class={[
            {
              "text-white": isActive,
              "text-secondary": !isActive,
            },
            "relative inline-block pb-3.5 tracking-subtitle",
            "before:absolute before:h-1 before:bottom-0 before:w-full before:bg-white before:opacity-50 before:scale-0 before:transition-transform hover:before:scale-100",
          ]}
        >
          {title}
        </Link>
      </Menu.Item>
    );
  }
);

type DestinationMenuItemProps = {
  destination: DestinationItem;
};
