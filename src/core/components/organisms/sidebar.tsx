import { component$ } from '@builder.io/qwik';
import { SidebarNav, SidebarPopover } from '@molecules';
import { ButtonSidebar } from '../atoms';
import { useSidebarProvider } from '@providers';

export const Sidebar = component$(() => {
	useSidebarProvider();

	return (
		<div class="relative">
			<SidebarPopover>
				<ButtonSidebar />
				<SidebarNav />
			</SidebarPopover>
		</div>
	);
});
