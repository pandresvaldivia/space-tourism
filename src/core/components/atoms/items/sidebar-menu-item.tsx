import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import sidebarMenuItemStyles from '@styles/atoms/sidebar-menu-item.module.css';
import { useCurrentPath } from '@hooks';
import type { MenuItem } from '@interfaces/services/menu';

export const SidebarMenuItem = component$(({ item }: SidebarMenuItemProps) => {
	const { isCurrentPath } = useCurrentPath();

	const { id, link, name } = item;

	const isActive = isCurrentPath(link);

	return (
		<li>
			<Link
				href={link}
				class={[
					sidebarMenuItemStyles.main,
					{ 'before:scale-100': isActive },
					'relative flex items-center gap-2.5 pl-8 text-base tracking-menu',
					'before:absolute before:right-0 before:h-full before:origin-right before:bg-white before:w-1 before:scale-0 before:transition-transform uppercase',
				]}
			>
				<span class="font-bold">{id}</span>
				<span>{name}</span>
			</Link>
		</li>
	);
});

type SidebarMenuItemProps = {
	item: MenuItem;
};
