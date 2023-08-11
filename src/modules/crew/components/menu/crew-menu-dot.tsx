import { component$ } from "@builder.io/qwik";
import type { CrewMembersItem } from "@interfaces/services/crew-members";
import { useCurrentPath } from "@hooks";
import { Link } from "@builder.io/qwik-city";

export const CrewMenuDot = component$(({ member }: CrewMenuDotProps) => {
  const { isCurrentPath } = useCurrentPath();

  const { slug, title } = member;
  const path = `/crew/${slug}/`;
  const isActive = isCurrentPath(path);

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
          "block h-2.5 bg-white aspect-square rounded-full transition-opacity",
        ]}
      />
    </li>
  );
});

type CrewMenuDotProps = {
  member: CrewMembersItem;
};
