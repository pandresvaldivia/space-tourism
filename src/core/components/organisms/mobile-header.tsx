import { component$ } from '@builder.io/qwik';
import { IconLogo } from '@icons';
import { Wrapper } from '@templates';
import { Sidebar } from '@organisms';

export const MobileHeader = component$(() => {
	return (
		<header class="pt-6">
			<Wrapper class="flex items-center justify-between">
				<a href="/">
					<IconLogo height="40" width="40" />
				</a>
				<Sidebar />
			</Wrapper>
		</header>
	);
});
