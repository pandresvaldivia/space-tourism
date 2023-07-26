export const isArrayEmpty = (array: unknown[]): boolean => {
	if (!Array.isArray(array)) return true;

	return array.length === 0;
};
