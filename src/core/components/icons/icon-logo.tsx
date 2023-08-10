import { component$ } from '@builder.io/qwik';
import { Icon } from '@templates';
import type { SvgElement } from '~/core/interfaces/icon';

export const IconLogo = component$((props: SvgElement) => {
	return (
		<Icon viewbox="0 0 48 48" {...props}>
			<circle cx="24" cy="24" r="24" fill="white" />
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z"
				fill="#0B0D17"
			/>
		</Icon>
	);
});
