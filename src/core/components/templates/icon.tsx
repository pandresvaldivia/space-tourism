import { Slot, component$ } from '@builder.io/qwik';
import type { SvgElement } from '~/core/interfaces/icon';

export const Icon = component$(
	({
		fill = 'currentColor',
		height = '20',
		width = '20',
		...props
	}: SvgElement) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill={fill}
				height={height}
				width={width}
				{...props}
			>
				<Slot />
			</svg>
		);
	}
);
