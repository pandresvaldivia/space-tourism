export const fetchGraphql = async ({
  query,
  variables,
  abortController,
}: fetchGraphqlParams) => {
  // TODO; handle errors
  const request = JSON.stringify({ query, variables });

  const response = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: request,
    signal: abortController?.signal,
  });

  const data = await response.json();
  return data;
};

type fetchGraphqlParams = {
  query: string;
  abortController?: AbortController;
  variables?: Record<string, unknown>;
};
