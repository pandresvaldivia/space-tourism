import type { Signal } from '@builder.io/qwik';
import {
	createContextId,
	useContext,
	useContextProvider,
} from '@builder.io/qwik';
import type { DestinationResponse } from '@interfaces/services/destination';

const destinationContext = createContextId<
	Readonly<Signal<DestinationResponse>>
>('space.destination-context');

export const useDestinationProvider = (
	destination: Readonly<Signal<DestinationResponse>>
) => {
	useContextProvider(destinationContext, destination);
};

export const useDestinationContext = () => useContext(destinationContext);
