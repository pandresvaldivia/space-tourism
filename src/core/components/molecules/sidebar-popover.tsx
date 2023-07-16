import { Slot, component$, useSignal } from '@builder.io/qwik';
import { useSidebarContext } from '@contexts';
import { useClickAway } from '@hooks';

export const SidebarPopover = component$(() => {
	const { closeSidebar } = useSidebarContext();
	const sidebarPopoverRef = useSignal<HTMLElement>();

	useClickAway(sidebarPopoverRef, closeSidebar);

	return (
		<div ref={sidebarPopoverRef}>
			<Slot />
		</div>
	);
});
