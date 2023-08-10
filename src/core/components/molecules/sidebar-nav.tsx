import { Resource, component$, useSignal } from '@builder.io/qwik';
import sidebarMenuStyles from '@styles/molecules/sidebar-menu.module.css';
import { useHeaderMenuContext, useSidebarContext } from '@contexts';
import { LoaderMenu, SidebarMenu, SkeletonSidebarMenu } from '@molecules';

export const SidebarNav = component$(() => {
	const { isOpen } = useSidebarContext();
	const sidebarMenuRef = useSignal<HTMLDivElement>();
	const menu = useHeaderMenuContext();

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
				onResolved={(menu) => (
					<LoaderMenu
						response={menu}
						skeleton={SkeletonSidebarMenu}
						menu={SidebarMenu}
					/>
				)}
				onPending={() => <SkeletonSidebarMenu />}
			/>
		</nav>
	);
});
