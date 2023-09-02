import { Resource, component$ } from "@builder.io/qwik";
import useGetDestinations from "../../hooks/useGetDestinations";
import { DestinationsLoader } from "../destinations-loader";
import { DestinationMenu } from "./destination-menu";
import { SkeletonDestinationMenu } from "../skeleton/skeleton-destination-menu";
import destinationLayoutStyles from "@styles/modules/destination/destination-layout.module.css";

export const DestinationNav = component$(() => {
  const destinations = useGetDestinations();

  return (
    <>
      <nav
        aria-label="Destinations menu"
        class={[
          destinationLayoutStyles.menu,
          "mb-5 md:mb-8 lg:mb-9 mx-auto lg:mx-0",
        ]}
      >
        <Resource
          value={destinations}
          onResolved={(destinations) => (
            <DestinationsLoader
              response={destinations}
              menu={DestinationMenu}
              skeleton={SkeletonDestinationMenu}
            />
          )}
          onPending={() => <SkeletonDestinationMenu />}
        />
      </nav>
    </>
  );
});
