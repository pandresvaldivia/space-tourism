export const fetchGrapghql = async (
	query: string,
	abortController: AbortController
) => {
	const request = JSON.stringify({ query });

	const response = await fetch('http://localhost:3000/api/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: request,
		signal: abortController.signal,
	});

	const data = await response.json();
	return data;
};
