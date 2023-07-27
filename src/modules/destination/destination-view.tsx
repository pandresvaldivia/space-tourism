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
			<Wrapper class="mx-auto px-10">
				<DestinationPlanet />
				<DestinationNav />
				<DestinationDescription />
				<hr
					class={[destinationView.divider, 'my-8 md:mb-7 max-w-xl mx-auto']}
				/>
				<DestinationDetails />
			</Wrapper>
		</div>
	);
});
