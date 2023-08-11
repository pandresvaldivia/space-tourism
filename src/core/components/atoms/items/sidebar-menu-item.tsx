import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import sidebarMenuItemStyles from "@styles/atoms/sidebar-menu-item.module.css";
import { useCurrentPath } from "@hooks";
import type { NavItem } from "@interfaces/services/header";
import { twoDigitsNumberFormat } from "@helpers/number";

export const SidebarMenuItem = component$(
  ({ item, index }: SidebarMenuItemProps) => {
    const { isCurrentPath } = useCurrentPath();

    const { label, url } = item.link;

    const isActive = isCurrentPath(url);

    return (
      <li>
        <Link
          href={url}
          class={[
            sidebarMenuItemStyles.main,
            { "before:scale-100": isActive },
            "relative flex items-center gap-2.5 pl-8 text-base tracking-menu font-barlow-condensed",
            "before:absolute before:right-0 before:h-full before:origin-right before:bg-white before:w-1 before:scale-0 before:transition-transform uppercase",
          ]}
        >
          <span class="font-bold">{twoDigitsNumberFormat(index)}</span>
          <span>{label}</span>
        </Link>
      </li>
    );
  }
);

type SidebarMenuItemProps = {
  item: NavItem;
  index: number;
};
