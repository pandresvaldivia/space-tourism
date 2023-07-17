import { component$ } from '@builder.io/qwik';
import { SidebarMenuItem } from '@atoms';
import type { MenuItem } from '@interfaces/services/menu';

export const SidebarMenu = component$(({ items }: SidebarMenuProps) => {
	return (
		<ul class="flex flex-col gap-5 text-white">
			{items.map((item) => (
				<SidebarMenuItem key={item.id} item={item} />
			))}
		</ul>
	);
});

type SidebarMenuProps = {
	items: MenuItem[];
};
