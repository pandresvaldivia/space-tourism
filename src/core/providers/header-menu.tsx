import type { ResourceReturn } from "@builder.io/qwik";
import {
  createContextId,
  useContext,
  useContextProvider,
} from "@builder.io/qwik";
import { useGraphql } from "@hooks";
import { HEADER_QUERY } from "@services/graphql/menu";
import type { HeaderData } from "@interfaces/services/header";
import type { GraphqlGenericResponse } from "@interfaces/services/response";

const headerMenuContext = createContextId<
  ResourceReturn<GraphqlGenericResponse<HeaderData>>
>("space.header-menu-context");

export const useHeaderMenuProvider = () => {
  const headerResponse = useGraphql<HeaderData>(HEADER_QUERY);

  useContextProvider(headerMenuContext, headerResponse);
};

export const useHeaderMenuContext = () => useContext(headerMenuContext);
