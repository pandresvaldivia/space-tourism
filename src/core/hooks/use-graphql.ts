import { useResource$ } from "@builder.io/qwik";
import { fetchGraphql } from "@helpers/graphql";
import type { GraphqlGenericResponse } from "@interfaces/services/response";

export const useGraphql = <T>(
  query: string,
  variables?: Record<string, unknown>
) => {
  const graphqlResource = useResource$<GraphqlGenericResponse<T>>(
    ({ cleanup }) => {
      const abortController = new AbortController();
      cleanup(() => abortController.abort("cleanup"));

      return fetchGraphql<T>({ query, abortController, variables });
    }
  );

  return graphqlResource;
};
