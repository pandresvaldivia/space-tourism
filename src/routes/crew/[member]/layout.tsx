import { component$, Slot } from "@builder.io/qwik";
import crewLayoutStyles from "@styles/modules/crew/crew-layout.module.css";
import { Wrapper } from "@templates";
import { CrewNav } from "@modules/crew/components/menu/crew-nav";

export default component$(() => {
  return (
    <div class={[crewLayoutStyles.main, "pb-16 pt-24 min-h-screen bg-cover"]}>
      <Wrapper
        class={[
          crewLayoutStyles.grid,
          "grid grid-cols-1 mx-auto px-10 md:px-10 lg:px-14 lg:flex lg:gap-24 xl:gap-40 lg:justify-center lg:items-end",
        ]}
      >
        <Slot />
        <CrewNav />
      </Wrapper>
    </div>
  );
});
