import { Resource, component$, useSignal } from '@builder.io/qwik';
import { SidebarMenuItem } from '@atoms';
import sidebarMenuStyles from '@styles/molecules/sidebar-menu.module.css';
import { useSidebarContext } from '@contexts';
import { useGraphql } from '@hooks';
import type { MenuResponse } from '@interfaces/services/menu';
import { SkeletonSidebarMenu } from '@molecules';
import { MENU_QUERY } from '@services/graphql/menu';

export const SidebarNav = component$(() => {
	const { isOpen } = useSidebarContext();
	const sidebarMenuRef = useSignal<HTMLDivElement>();
	const menu = useGraphql<MenuResponse>(MENU_QUERY);

	return (
		<nav
			ref={sidebarMenuRef}
			class={[
				sidebarMenuStyles.main,
				{
					'translate-x-0': isOpen.value,
					'translate-x-full': !isOpen.value,
				},
				'fixed top-0 right-0 h-screen backdrop-blur-2xl w-3/4 pt-28 transition-all',
			]}
			aria-label="Main Menu"
		>
			<Resource
				value={menu}
				onResolved={(menu) => {
					const { errors, data } = menu;

					if (errors || !data) return <SkeletonSidebarMenu />;

					const { docs: menuItems } = data.Menus;

					return (
						<ul class="flex flex-col gap-5 text-white">
							{menuItems.map((item) => (
								<SidebarMenuItem key={item.id} item={item} />
							))}
						</ul>
					);
				}}
				onPending={() => <SkeletonSidebarMenu />}
			/>
		</nav>
	);
});
