import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { HomeView } from '@modules/home/home-view';

export default component$(() => {
	return <HomeView />;
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
