import { component$ } from '@builder.io/qwik';
import { IconLogo } from '@icons';
import { HeaderNav } from '@molecules';
import desktopHeaderStyles from '@styles/organisms/desktop-header.module.css';

export const DesktopHeader = component$(() => {
	return (
		<header class="fixed top-10 pl-14 w-full hidden lg:block">
			<div class="flex items-center gap-16">
				<a href="/">
					<IconLogo height="40" width="40" />
				</a>
				<div class="flex items-center grow">
					<div
						class={[
							desktopHeaderStyles.divider,
							'h-px w-full bg-white/20 -mr-8',
						]}
					/>
					<HeaderNav />
				</div>
			</div>
		</header>
	);
});
