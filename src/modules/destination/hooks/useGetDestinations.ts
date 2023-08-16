import { useGraphql } from "@hooks";
import { DESTINATIONS } from "@services/graphql/destination";
import type { DestinationsData } from "@interfaces/services/destinations";

const useGetDestinations = () => {
  const destinationsResponse = useGraphql<DestinationsData>(DESTINATIONS);

  return destinationsResponse;
};

export default useGetDestinations;
