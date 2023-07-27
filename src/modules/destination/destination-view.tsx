import { component$ } from '@builder.io/qwik';
import { Wrapper } from '@templates';
import { DestinationPlanet } from './components/destination-planet';
import { DestinationNav } from './components/menu/destination-nav';
import { DestinationDescription } from './components/description/destination-description';
import { DestinationDetails } from './components/description/destination-details';
import destinationView from '@styles/modules/destination/destination-view.module.css';

export const DestinationView = component$(() => {
	return (
		<div class={[destinationView.main, 'pb-16 min-h-screen bg-cover']}>
			<Wrapper class="mx-auto px-10 md:px-10 lg:px-14 lg:flex lg:gap-24 xl:gap-40 lg:justify-center lg:items-end">
				<DestinationPlanet />
				<div
					class={[
						destinationView.content,
						'flex flex-col items-center lg:items-start',
					]}
				>
					<DestinationNav />
					<DestinationDescription />
					<hr
						class={[
							destinationView.divider,
							'my-8 md:mb-7 lg:mt-0 w-full max-w-xl mx-auto',
						]}
					/>
					<DestinationDetails />
				</div>
			</Wrapper>
		</div>
	);
});
