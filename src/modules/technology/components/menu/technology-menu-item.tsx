import { $, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { TechnologiesItem } from "@interfaces/services/technologies";
import { useCurrentPath, useMedia } from "@hooks";
import techologyMenuItemStyles from "@styles/modules/technology/technology-menu-item.module.css";
import { useSlideTransitionContext } from "@contexts";
import { MEDIA_QUERY } from "@constants/media-query";

export const TechnologyMenuItem = component$(
  ({ technology, index }: TechnologyMenuItemProps) => {
    const { isCurrentPath } = useCurrentPath();
    const transition = useSlideTransitionContext();
    const fromLg = useMedia(MEDIA_QUERY.LG);

    const { slug, title } = technology;
    const path = `/technology/${slug}/`;
    const isActive = isCurrentPath(path);

    const handleOnClick = $(() => {
      if (index < transition.menuIndex) {
        transition.type = fromLg.value
          ? "animate__fadeInDown"
          : "animate__fadeInLeft";
      }

      if (index > transition.menuIndex) {
        transition.type = fromLg.value
          ? "animate__fadeInUp"
          : "animate__fadeInRight";
      }

      transition.menuIndex = index;
    });

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
          onClick$={handleOnClick}
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
