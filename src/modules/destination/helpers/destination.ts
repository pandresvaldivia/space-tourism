import { fetchGrapghql } from '@helpers/graphql';
import { DESTINATION } from '@services/graphql/destination';
import type { DestinationResponse } from '@interfaces/services/destination';

export const getDestinationById = async (
	id: string
): Promise<DestinationResponse> => {
	return fetchGrapghql({ query: DESTINATION, variables: { id } });
};
