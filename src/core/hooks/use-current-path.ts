import { useLocation } from '@builder.io/qwik-city';
import { areStringsEqual } from '@helpers/string';

export const useCurrentPath = () => {
	const { pathname: currentPath } = useLocation().url;

	const isCurrentPath = (path: string) => areStringsEqual(currentPath, path);

	return {
		currentPath,
		isCurrentPath,
	};
};
