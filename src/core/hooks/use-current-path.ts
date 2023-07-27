import { useLocation } from '@builder.io/qwik-city';
import { areStringsEqual } from '@helpers/string';

export const useCurrentPath = () => {
	const { pathname } = useLocation().url;

	const isCurrentPath = (path: string) => areStringsEqual(pathname, path);

	const isSubPath = (path: string) => {
		const rootPath = path.split('/').at(1) || '';
		const currentPath = pathname.split('/').at(1) || '';

		return (
			areStringsEqual(rootPath, currentPath) && !areStringsEqual('/', path)
		);
	};

	return {
		pathname,
		isCurrentPath,
		isSubPath,
	};
};
