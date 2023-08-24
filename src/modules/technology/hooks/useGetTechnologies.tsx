import { useGraphql } from "@hooks";
import { TECHNOLOGIES } from "@services/graphql/technology";
import type { TechnologiesData } from "@interfaces/services/technologies";

const useGetTechnologies = () => {
  const technologiesResponse = useGraphql<TechnologiesData>(TECHNOLOGIES);

  return technologiesResponse;
};

export default useGetTechnologies;
