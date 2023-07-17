import { component$ } from '@builder.io/qwik';
import { useHeaderMenuProvider } from '@providers';
import { MobileHeader, DesktopHeader } from '@organisms';

export const MainHeader = component$(() => {
	useHeaderMenuProvider();

	return (
		<>
			<MobileHeader />
			<DesktopHeader />
		</>
	);
});
