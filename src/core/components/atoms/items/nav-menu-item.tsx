import { component$ } from '@builder.io/qwik';
import type { MenuItem } from '@interfaces/services/menu';
import { useCurrentPath } from '@hooks';
import { Link } from '@builder.io/qwik-city';
import navMenuItemStyles from '@styles/atoms/nav-menu-item.module.css';

export const NavMenuItem = component$(({ item }: NavMenuItemProps) => {
	const { isCurrentPath, isSubPath } = useCurrentPath();

	const { id, link, name } = item;

	const isActive = isSubPath(link) || isCurrentPath(link);

	return (
		<li class="h-full">
			<Link
				href={link}
				class={[
					navMenuItemStyles.main,
					{ 'before:scale-100': isActive },
					'relative h-full flex items-center justify-center gap-2 text-sm lg:text-base tracking-menu font-barlow-condensed',
					'before:absolute before:bottom-0 before:w-full before:origin-bottom before:bg-white before:scale-0 before:transition-transform uppercase',
				]}
			>
				<span class="font-bold hidden lg:inline">{id}</span>
				<span>{name}</span>
			</Link>
		</li>
	);
});

type NavMenuItemProps = {
	item: MenuItem;
};
