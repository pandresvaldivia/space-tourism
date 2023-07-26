import { component$ } from '@builder.io/qwik';
import { Wrapper } from '@templates';
import { DestinationPlanet } from './components/destination-planet';
import { DestinationNav } from './components/menu/destination-nav';
import { DestinationDescription } from './components/description/destination-description';
import { DestinationDetails } from './components/description/destination-details';
import destinationView from '@styles/modules/destination/destination-view.module.css';

export const DestinationView = component$(() => {
	return (
		<div class={[destinationView.main, 'pt-24 pb-16 min-h-screen bg-cover']}>
			<Wrapper class="mx-auto">
				<DestinationPlanet />
				<DestinationNav />
				<DestinationDescription />
				<hr class="my-8 border-[#383B4B]" />
				<DestinationDetails />
			</Wrapper>
		</div>
	);
});
