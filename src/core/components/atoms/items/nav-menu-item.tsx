import { component$ } from '@builder.io/qwik';
import type { MenuItem } from '@interfaces/services/menu';
import { useCurrentPath } from '@hooks';
import { Link } from '@builder.io/qwik-city';
import navMenuItemStyles from '@styles/atoms/nav-menu-item.module.css';

export const NavMenuItem = component$(({ item }: NavMenuItemProps) => {
	const { isCurrentPath } = useCurrentPath();

	const { id, link, name } = item;

	const isActive = isCurrentPath(link);

	return (
		<li class="h-full">
			<Link
				href={link}
				class={[
					navMenuItemStyles.main,
					{ 'before:scale-100': isActive },
					'relative h-full flex items-center justify-center gap-2 text-base tracking-menu',
					'before:absolute before:bottom-0 before:w-full before:origin-bottom before:bg-white before:scale-0 before:transition-transform uppercase',
				]}
			>
				<span class="font-bold">{id}</span>
				<span>{name}</span>
			</Link>
		</li>
	);
});

type NavMenuItemProps = {
	item: MenuItem;
};
