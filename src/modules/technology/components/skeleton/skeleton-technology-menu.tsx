import { component$ } from "@builder.io/qwik";
import { SkeletonTechnologyMenuItem } from "./skeleton-technology-menu-item";

export const SkeletonTechnologyMenu = component$(() => {
  return (
    <div class="animate-pulse flex lg:flex-col gap-4 lg:gap-8">
      <SkeletonTechnologyMenuItem index={1} active />
      <SkeletonTechnologyMenuItem index={2} />
      <SkeletonTechnologyMenuItem index={3} />
    </div>
  );
});
