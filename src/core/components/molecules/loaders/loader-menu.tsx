import { component$, type Component } from '@builder.io/qwik';
import type { MenuItem } from '@interfaces/services/menu';
import type { MenuResponse } from '@interfaces/services/menu';

export const LoaderMenu = component$(
	({ response, skeleton: Skeleton, menu: Menu }: LoaderMenuProps) => {
		const { errors, data } = response;

		if (errors || !data) return <Skeleton />;

		const { docs: items } = data.Menus;

		return <Menu items={items} />;
	}
);

type LoaderMenuProps = {
	response: MenuResponse;
	skeleton: Component<{}>;
	menu: Component<{ items: MenuItem[] }>;
};
