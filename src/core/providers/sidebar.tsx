import type { QRL, Signal } from '@builder.io/qwik';
import {
	$,
	createContextId,
	useContext,
	useContextProvider,
	useSignal,
} from '@builder.io/qwik';

const sidebarContext = createContextId<SideBarContextState>(
	'space.sidebar-context'
);

export const useSidebarProvider = () => {
	const isOpen = useSignal(false);

	const toggleSidebar = $(() => {
		isOpen.value = !isOpen.value;
	});

	const closeSidebar = $(() => {
		isOpen.value = false;
	});

	const sidebarState = {
		isOpen,
		toggleSidebar,
		closeSidebar,
	};

	useContextProvider(sidebarContext, sidebarState);
};

export const useSidebarContext = () => useContext(sidebarContext);

type SideBarContextState = {
	isOpen: Signal<boolean>;
	toggleSidebar: QRL<() => void>;
	closeSidebar: QRL<() => void>;
};
