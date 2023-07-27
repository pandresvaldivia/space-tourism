import { component$ } from '@builder.io/qwik';
import { useDestinationContext } from '../../providers/destination';

import destinationDescriptionStyles from '@styles/modules/destination/destination-description.module.css';

export const DestinationDescription = component$(() => {
	const { value } = useDestinationContext();
	const { name, description } = value.data!.Destination;

	return (
		<section class="text-center md:mb-12" aria-label="Destination description">
			<h1
				class={[
					destinationDescriptionStyles.title,
					'leading-tight text-white font-bellefair uppercase md:mb-2',
				]}
			>
				{name}
			</h1>
			<p class="text-secondary text-sm md:text-base leading-body max-w-xl mx-auto">
				{description}
			</p>
		</section>
	);
});
