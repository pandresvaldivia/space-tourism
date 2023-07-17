import type { ResourceReturn } from '@builder.io/qwik';
import {
	createContextId,
	useContext,
	useContextProvider,
} from '@builder.io/qwik';
import { useGraphql } from '@hooks';
import type { MenuResponse } from '@interfaces/services/menu';
import { MENU_QUERY } from '@services/graphql/menu';

const headerMenuContext = createContextId<ResourceReturn<MenuResponse>>(
	'space.header-menu-context'
);

export const useHeaderMenuProvider = () => {
	const menuResponse = useGraphql<MenuResponse>(MENU_QUERY);

	useContextProvider(headerMenuContext, menuResponse);
};

export const useHeaderMenuContext = () => useContext(headerMenuContext);
