import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { useCurrentPath } from '@hooks';
import type { DestinationItem } from '@interfaces/services/destinations';

export const DestinationMenuItem = component$(
	({ destination }: DestinationMenuItemProps) => {
		const { isCurrentPath } = useCurrentPath();

		const { id, name } = destination;
		const path = `/destinations/${id}/`;
		const isActive = isCurrentPath(path);

		return (
			<li>
				<Link
					href={path}
					class={[
						{
							'before:scale-100 text-white': isActive,
							'text-secondary': !isActive,
						},
						'relative inline-block pb-3.5 tracking-subtitle mb-5',
						'before:absolute before:bottom-0 before:w-full before:origin-bottom before:bg-white before:scale-0 before:transition-transform before:h-0.5',
					]}
				>
					{name}
				</Link>
			</li>
		);
	}
);

type DestinationMenuItemProps = {
	destination: DestinationItem;
};
