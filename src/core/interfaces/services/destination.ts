import type { GraphqlGenericResponse } from './response';

export type DestinationResponse = GraphqlGenericResponse<DestinationData>;

type DestinationData = {
	Destination: DestinationDetails;
};

type DestinationDetails = {
	name: string;
	description: string;
	travel_time: string;
	distance: string;
	color: string;
	image: DestinationImage;
	id: string;
};

export type DestinationImage = {
	alt: string;
	filename: string;
	height: number;
	width: number;
	url: string;
};
