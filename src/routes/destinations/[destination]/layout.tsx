import { component$, Slot } from "@builder.io/qwik";
import { DestinationNav } from "@modules/destination/components/menu/destination-nav";
import destinationLayoutStyles from "@styles/modules/destination/destination-layout.module.css";
import { Wrapper } from "@templates";

export default component$(() => {
  return (
    <div class={[destinationLayoutStyles.main, "pb-16 min-h-screen"]}>
      <Wrapper
        class={[
          destinationLayoutStyles.grid,
          "grid mx-auto md:px-10 lg:px-14 lg:gap-x-8",
        ]}
      >
        <Slot />
        <DestinationNav />
      </Wrapper>
    </div>
  );
});
