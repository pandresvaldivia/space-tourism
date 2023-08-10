import type { ResourceReturn } from "@builder.io/qwik";
import {
  createContextId,
  useContext,
  useContextProvider,
} from "@builder.io/qwik";
import { useGraphql } from "@hooks";
import type { HeaderResponse } from "../interfaces/services/header";
import { HEADER_QUERY } from "@services/graphql/menu";

const headerMenuContext = createContextId<ResourceReturn<HeaderResponse>>(
  "space.header-menu-context"
);

export const useHeaderMenuProvider = () => {
  const headerResponse = useGraphql<HeaderResponse>(HEADER_QUERY);

  useContextProvider(headerMenuContext, headerResponse);
};

export const useHeaderMenuContext = () => useContext(headerMenuContext);
