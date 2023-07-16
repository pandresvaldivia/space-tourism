import type { GraphqlGenericResponse } from './response';

export type MenuResponse = GraphqlGenericResponse<MenuData>;

type MenuData = {
	Menus: MenuDocs;
};

type MenuDocs = {
	docs: MenuItem[];
};

export type MenuItem = {
	id: string;
	name: string;
	link: string;
};
