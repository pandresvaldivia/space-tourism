import type { Component } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import type {
	DestinationItem,
	DestinationsResponse,
} from '@interfaces/services/destinations';

export const DestinationsLoader = component$(
	({ response, skeleton: Skeleton, menu: Menu }: DestinationsLoaderProps) => {
		const { errors, data } = response;

		if (errors || !data) return <Skeleton />;

		const { docs: items } = data.Destinations;

		return <Menu items={items} />;
	}
);

type DestinationsLoaderProps = {
	response: DestinationsResponse;
	skeleton: Component<{}>;
	menu: Component<{ items: DestinationItem[] }>;
};
