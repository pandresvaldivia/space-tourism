import { component$ } from '@builder.io/qwik';
import { IconLogo } from '@icons';
import { HeaderNav } from '@molecules';
import desktopHeaderStyles from '@styles/organisms/desktop-header.module.css';

export const DesktopHeader = component$(() => {
	return (
		<header class="fixed lg:top-10 pl-14 w-full hidden md:block">
			<div class="flex items-center justify-between gap-16">
				<a href="/">
					<IconLogo height="40" width="40" class="md:h-12 md:w-12" />
				</a>
				<div class="flex items-center lg:grow">
					<div
						class={[
							desktopHeaderStyles.divider,
							'hidden lg:block h-px w-full bg-white/20 -mr-8',
						]}
					/>
					<HeaderNav />
				</div>
			</div>
		</header>
	);
});
