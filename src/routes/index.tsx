import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
	return (
		<>
			<h1>Space tourism</h1>
		</>
	);
});

export const head: DocumentHead = {
	title: 'Space tourism',
	meta: [
		{
			name: 'description',
			content: 'So, you want to travet to space?',
		},
	],
};
