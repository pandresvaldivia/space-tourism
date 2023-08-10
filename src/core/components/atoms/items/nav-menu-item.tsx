import { component$ } from "@builder.io/qwik";
import { useCurrentPath } from "@hooks";
import { Link } from "@builder.io/qwik-city";
import navMenuItemStyles from "@styles/atoms/nav-menu-item.module.css";
import type { NavItem } from "@interfaces/services/header";
import { twoDigitsNumberFormat } from "@helpers/number";

export const NavMenuItem = component$(({ item, index }: NavMenuItemProps) => {
  const { isCurrentPath, isSubPath } = useCurrentPath();

  const { label, url } = item.link;

  const isActive = isSubPath(url) || isCurrentPath(url);

  return (
    <li class="h-full">
      <Link
        href={url}
        class={[
          navMenuItemStyles.main,
          { "before:scale-100": isActive },
          "relative h-full flex items-center justify-center gap-2 text-sm lg:text-base tracking-menu font-barlow-condensed",
          "before:absolute before:bottom-0 before:w-full before:origin-bottom before:bg-white before:scale-0 before:transition-transform uppercase",
        ]}
      >
        <span class="font-bold hidden lg:inline">
          {twoDigitsNumberFormat(index)}
        </span>
        <span>{label}</span>
      </Link>
    </li>
  );
});

type NavMenuItemProps = {
  index: number;
  item: NavItem;
};
