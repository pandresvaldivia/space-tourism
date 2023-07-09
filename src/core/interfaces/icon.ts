import type { QwikIntrinsicElements } from '@builder.io/qwik';

type SvgProps = {
	viewbox?: string;
	fill?: string;
	stroke?: string;
	height?: string;
	width?: string;
};

export type SvgElement = SvgProps & QwikIntrinsicElements['svg'];
