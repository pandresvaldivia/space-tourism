import { Resource, component$ } from '@builder.io/qwik';
import useGetDestinations from '../../hooks/useGetDestinations';
import { DestinationsLoader } from '../destinations-loader';
import { DestinationMenu } from './destination-menu';
import { SkeletonDestinationMenu } from '../skeleton/skeleton-destination-menu';

export const DestinationNav = component$(() => {
	const destinations = useGetDestinations();

	return (
		<nav aria-label="Destinations menu">
			<Resource
				value={destinations}
				onResolved={(destinations) => (
					<DestinationsLoader
						response={destinations}
						skeleton={SkeletonDestinationMenu}
						menu={DestinationMenu}
					/>
				)}
				onPending={() => <SkeletonDestinationMenu />}
			/>
		</nav>
	);
});
