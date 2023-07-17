import { component$ } from '@builder.io/qwik';
import type { MenuItem } from '@interfaces/services/menu';
import { NavMenuItem } from '@atoms';

export const HeaderMenu = component$(({ items }: HeaderMenuProps) => {
	return (
		<ul class="flex gap-12 text-white h-full">
			{items.map((item) => (
				<NavMenuItem key={item.id} item={item} />
			))}
		</ul>
	);
});

type HeaderMenuProps = {
	items: MenuItem[];
};
