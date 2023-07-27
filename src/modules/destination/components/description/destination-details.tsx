import { component$ } from '@builder.io/qwik';
import { DestinationDetail } from './destination-detail';
import { useDestinationContext } from '../../providers/destination';

export const DestinationDetails = component$(() => {
	const { value } = useDestinationContext();
	const { distance, travel_time } = value.data!.Destination;

	return (
		<section
			class="flex flex-col md:flex-row gap-8 md:gap-24 justify-center"
			aria-label="Destination details"
		>
			<DestinationDetail title="avg. distance" content={distance} />
			<DestinationDetail title="est. travel time" content={travel_time} />
		</section>
	);
});
