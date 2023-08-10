import { $, component$ } from '@builder.io/qwik';
import buttonSidebarStyles from '@styles/atoms/button-sidebar.module.css';
import { useSidebarContext } from '@contexts';

export const ButtonSidebar = component$(() => {
	const { toggleSidebar, isOpen } = useSidebarContext();

	const handleClick = $(() => {
		toggleSidebar();
	});

	return (
		<button
			onClick$={handleClick}
			class="relative z-10 h-6 w-6"
			aria-label={isOpen.value ? 'Close sidebar' : 'Open sidebar'}
		>
			<span
				aria-hidden
				class={[
					buttonSidebarStyles.main,
					{
						[buttonSidebarStyles.open]: isOpen.value,
					},
					'relative block',
					'before:absolute before:bottom-full before:-translate-y-1.5 before:block before:w-full before:bg-secondary before:transition-transform',
					'after:absolute after:top-full after:translate-y-1.5 after:block after:w-full after:bg-secondary after:transition-transform',
				]}
			>
				<span
					class={[
						buttonSidebarStyles.middle,
						{ '-translate-x-4 opacity-0': isOpen.value },
						'absolute block w-6 bg-secondary transition-all pointer-events-none',
					]}
				/>
			</span>
		</button>
	);
});
