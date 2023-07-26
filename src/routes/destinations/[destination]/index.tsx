import { component$ } from '@builder.io/qwik';
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
