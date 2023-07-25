import { Resource, component$ } from '@builder.io/qwik';
import HeaderNavMenuStyles from '@styles/molecules/header-nav-menu.module.css';
import { HeaderMenu, LoaderMenu, SkeletonSidebarMenu } from '@molecules';
import { useHeaderMenuContext } from '@contexts';

export const HeaderNav = component$(() => {
	const menu = useHeaderMenuContext();

	return (
		<nav
			class={[
				HeaderNavMenuStyles.main,
				'h-24 lg:pr-8 shrink-0 w-full backdrop-blur-2xl',
			]}
		>
			<Resource
				value={menu}
				onResolved={(menu) => (
					<LoaderMenu
						response={menu}
						skeleton={SkeletonSidebarMenu}
						menu={HeaderMenu}
					/>
				)}
				onPending={() => <SkeletonSidebarMenu />}
			/>
		</nav>
	);
});
