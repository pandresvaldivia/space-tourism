import { component$ } from '@builder.io/qwik';
import { IconLogo } from '@icons';
import { Wrapper } from '@templates';
import { Sidebar } from '@organisms';

export const MobileHeader = component$(() => {
	return (
		<header class="fixed z-10 top-0 w-full pt-6 md:hidden">
			<Wrapper class="flex items-center justify-between">
				<a href="/" aria-label="Go to space tourism homepage">
					<IconLogo height="40" width="40" />
				</a>
				<Sidebar />
			</Wrapper>
		</header>
	);
});
