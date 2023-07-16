import { useResource$ } from '@builder.io/qwik';
import { fetchGrapghql } from '@helpers/graphql';

export const useGraphql = <T>(query: string) => {
	const graphqlResource = useResource$<T>(({ cleanup }) => {
		const abortController = new AbortController();
		cleanup(() => abortController.abort('cleanup'));

		return fetchGrapghql(query, abortController);
	});

	return graphqlResource;
};
