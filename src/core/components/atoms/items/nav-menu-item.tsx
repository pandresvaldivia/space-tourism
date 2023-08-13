import { component$ } from "@builder.io/qwik";
import { useCurrentPath } from "@hooks";
import { Link } from "@builder.io/qwik-city";
import type { NavItem } from "@interfaces/services/header";
import { twoDigitsNumberFormat } from "@helpers/number";
import { Menu } from "@templates";

export const NavMenuItem = component$(({ item, index }: NavMenuItemProps) => {
  const { isCurrentPath, isSubPath } = useCurrentPath();

  const { label, url } = item.link;

  const isActive = isSubPath(url) || isCurrentPath(url);

  return (
    <Menu.Item class="h-full" active={isActive}>
      <Link
        href={url}
        class={[
          "relative h-full flex items-center justify-center gap-2 text-sm lg:text-base tracking-menu font-barlow-condensed uppercase",
          "before:absolute before:h-1 before:bottom-0 before:w-full before:bg-white before:opacity-50 before:scale-0 before:transition-transform hover:before:scale-100",
        ]}
      >
        <span class="font-bold hidden lg:inline">
          {twoDigitsNumberFormat(index)}
        </span>
        <span>{label}</span>
      </Link>
    </Menu.Item>
  );
});

type NavMenuItemProps = {
  index: number;
  item: NavItem;
};
