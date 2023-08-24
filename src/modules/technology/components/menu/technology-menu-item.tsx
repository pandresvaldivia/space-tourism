import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { TechnologiesItem } from "@interfaces/services/technologies";
import { useCurrentPath } from "@hooks";
import techologyMenuItemStyles from "@styles/modules/technology/technology-menu-item.module.css";

export const TechnologyMenuItem = component$(
  ({ technology, index }: TechnologyMenuItemProps) => {
    const { isCurrentPath } = useCurrentPath();

    const { slug, title } = technology;
    const path = `/technology/${slug}/`;
    const isActive = isCurrentPath(path);

    return (
      <li>
        <Link
          href={path}
          class={[
            techologyMenuItemStyles.link,
            {
              "bg-white border-white text-primary": isActive,
              "border-white/25 text-white": !isActive,
            },
            "flex items-center justify-center font-bellefair aspect-square rounded-full border transition-colors",
          ]}
          aria-label={`Go to ${title} page`}
        >
          {index + 1}
        </Link>
      </li>
    );
  }
);

type TechnologyMenuItemProps = {
  technology: TechnologiesItem;
  index: number;
};
