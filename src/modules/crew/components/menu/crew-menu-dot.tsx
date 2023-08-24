import { $, component$ } from "@builder.io/qwik";
import type { CrewMembersItem } from "@interfaces/services/crew-members";
import { useCurrentPath } from "@hooks";
import { Link } from "@builder.io/qwik-city";
import { useSlideTransitionContext } from "@contexts";

export const CrewMenuDot = component$(({ member, index }: CrewMenuDotProps) => {
  const { isCurrentPath } = useCurrentPath();
  const transition = useSlideTransitionContext();

  const { slug, title } = member;
  const path = `/crew/${slug}/`;
  const isActive = isCurrentPath(path);

  const handleOnClick = $(() => {
    if (index < transition.menuIndex) {
      transition.type = "animate__fadeInLeft";
    }

    if (index > transition.menuIndex) {
      transition.type = "animate__fadeInRight";
    }

    transition.menuIndex = index;
  });

  return (
    <li>
      <Link
        href={path}
        title={title}
        aria-label={title}
        class={[
          {
            "opacity-100": isActive,
            "opacity-20 hover:opacity-50": !isActive,
          },
          "block h-2.5 lg:h-3.5 bg-white aspect-square rounded-full transition-opacity",
        ]}
        onClick$={handleOnClick}
      />
    </li>
  );
});

type CrewMenuDotProps = {
  member: CrewMembersItem;
  index: number;
};
