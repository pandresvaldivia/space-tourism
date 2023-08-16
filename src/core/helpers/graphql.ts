import type { GraphqlGenericResponse } from "../interfaces/services/response";

export const fetchGraphql = async <T>({
  query,
  variables,
  abortController,
}: fetchGraphqlParams): Promise<GraphqlGenericResponse<T>> => {
  try {
    const request = JSON.stringify({ query, variables });

    const response = await fetch("http://localhost:3000/api/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: request,
      signal: abortController?.signal,
    });

    const responseData: GraphqlGenericResponse<T> = await response.json();

    if (responseData.errors) {
      const errorMessages = responseData.errors.map((error) => error.message);
      console.error(`GraphQL errors: ${errorMessages.join(", ")}`);
    }

    return responseData;
  } catch (error) {
    console.log({
      error,
    });
    throw new Error("An error occurred while fetching data from the server.");
  }
};

type fetchGraphqlParams = {
  query: string;
  abortController?: AbortController;
  variables?: Record<string, unknown>;
};
