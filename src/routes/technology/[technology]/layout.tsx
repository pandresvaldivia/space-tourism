import { component$, Slot } from "@builder.io/qwik";
import technologyLayoutStyles from "@styles/modules/technology/technology-layout.module.css";
import { TechnologyNav } from "@modules/technology/components/menu/technology-nav";
import { useSlideTransitionProvider } from "@providers";
import { HeadlineGroup } from "@atoms";

export default component$(() => {
  useSlideTransitionProvider();

  return (
    <div
      class={[
        technologyLayoutStyles.main,
        "pb-16 min-h-screen overflow-hidden",
      ]}
    >
      <div
        class={[
          technologyLayoutStyles.grid,
          "grid items-center px-0 lg:pl-10 2xl:pl-0 lg:gap-x-8 xl:gap-x-20 max-w-wrapper ml-auto 2xl:mx-auto",
        ]}
      >
        <div class={[technologyLayoutStyles.title, "px-6 md:px-10 lg:px-0"]}>
          <HeadlineGroup index="03" text="Space launch 101" class="lg:mb-6" />
        </div>
        <TechnologyNav />
        <Slot />
      </div>
    </div>
  );
});
