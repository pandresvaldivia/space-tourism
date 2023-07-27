import { component$ } from '@builder.io/qwik';
import type { DestinationItem } from '@interfaces/services/destinations';
import { DestinationMenuItem } from './destination-menu-item';

export const DestinationMenu = component$(({ items }: DestinationMenuProps) => {
	return (
		<ul class="flex justify-center gap-6 font-barlow-condensed text-sm md:text-base uppercase">
			{items.map((destination) => (
				<DestinationMenuItem key={destination.id} destination={destination} />
			))}
		</ul>
	);
});

type DestinationMenuProps = {
	items: DestinationItem[];
};
