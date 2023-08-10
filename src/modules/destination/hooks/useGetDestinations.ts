import { useGraphql } from "@hooks";
import { DESTINATIONS } from "@services/graphql/destination";
import type { DestinationsResponse } from "@interfaces/services/destinations";

const useGetDestinations = () => {
  const destinationsResponse = useGraphql<DestinationsResponse>(DESTINATIONS);

  return destinationsResponse;
};

export default useGetDestinations;
