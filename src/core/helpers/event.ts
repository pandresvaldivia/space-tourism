export function on<T extends HTMLElement | Document>(
	obj: T | null,
	...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
) {
	if (!obj?.addEventListener) return;

	obj.addEventListener(
		...(args as Parameters<HTMLElement['addEventListener']>)
	);
}

export function off<T extends HTMLElement | Document>(
	obj: T | null,
	...args:
		| Parameters<T['removeEventListener']>
		| [string, Function | null, ...any]
): void {
	if (!obj?.addEventListener) return;

	obj.removeEventListener(
		...(args as Parameters<HTMLElement['removeEventListener']>)
	);
}
