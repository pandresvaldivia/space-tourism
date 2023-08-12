import { component$, Slot } from "@builder.io/qwik";
import crewLayoutStyles from "@styles/modules/crew/crew-layout.module.css";
import { Wrapper } from "@templates";
import { CrewNav } from "@modules/crew/components/menu/crew-nav";
import { useCrewTransitionProvider } from "@modules/crew/providers/crew-transition";

export default component$(() => {
  useCrewTransitionProvider();

  return (
    <div
      class={[
        crewLayoutStyles.main,
        "pb-12 md:pb-0 min-h-screen overflow-hidden",
      ]}
    >
      <Wrapper
        class={[
          crewLayoutStyles.grid,
          "grid content-between mx-auto md:px-10 lg:px-16",
        ]}
      >
        <Slot />
        <CrewNav />
      </Wrapper>
    </div>
  );
});
