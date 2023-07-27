import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import { getDestinationById } from '@modules/destination/helpers/destination';
import { DestinationView } from '@modules/destination/destination-view';
import { useDestinationProvider } from '@modules/destination/providers/destination';

export const useDestinationDetails = routeLoader$(async (event) => {
	const { destination: id } = event.params;
	const destination = await getDestinationById(id);

	// TODO: Redirect to 404 if destination is not found

	return destination;
});

export default component$(() => {
	const destination = useDestinationDetails();

	useDestinationProvider(destination);

	const { errors, data } = destination.value;

	if (errors || !data) {
		return <div>Loading...</div>;
	}

	return <DestinationView />;
});

export const head: DocumentHead = ({ resolveValue }) => {
	const destination = resolveValue(useDestinationDetails);
	const { data, errors } = destination;

	if (errors || !data) return {};

	const { name, description } = data.Destination;

	// TODO: Add image to head
	return {
		title: `${name} | Space tourism`,
		meta: [
			{
				name: 'description',
				content: description,
			},
		],
	};
};
