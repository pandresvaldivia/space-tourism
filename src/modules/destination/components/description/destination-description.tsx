import { component$ } from '@builder.io/qwik';
import { useDestinationContext } from '../../providers/destination';

export const DestinationDescription = component$(() => {
	const { value } = useDestinationContext();
	const { name, description } = value.data!.Destination;

	return (
		<section class="text-center" aria-label="Destination description">
			<h1 class="text-5xl leading-tight text-white font-bellefair uppercase">
				{name}
			</h1>
			<p class="text-secondary text-sm leading-body">{description}</p>
		</section>
	);
});
