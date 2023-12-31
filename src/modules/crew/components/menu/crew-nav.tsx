import { Resource, component$ } from "@builder.io/qwik";
import crewLayoutStyles from "@styles/modules/crew/crew-layout.module.css";
import { useGetCrewMembers } from "../../hooks/useGetCrewMembers";
import { CrewMembersLoader } from "../crew-members-loader";
import { SkeletonCrewMenu } from "../skeleton/skeleton-crew-menu";
import { CrewMenu } from "./crew-menu";

export const CrewNav = component$(() => {
  const { crewMembersResponse } = useGetCrewMembers();

  return (
    <nav
      aria-label="Crew members menu"
      class={[crewLayoutStyles.menu, "mb-8 md:mb-10 mx-auto lg:mx-0 lg:mb-24"]}
    >
      <Resource
        value={crewMembersResponse}
        onResolved={(crewMembers) => (
          <CrewMembersLoader
            response={crewMembers}
            menu={CrewMenu}
            skeleton={SkeletonCrewMenu}
          />
        )}
        onPending={() => <SkeletonCrewMenu />}
      />
    </nav>
  );
});
