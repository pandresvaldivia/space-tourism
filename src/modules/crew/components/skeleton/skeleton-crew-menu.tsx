import { component$ } from "@builder.io/qwik";
import { SkeletonCrewMenuDot } from "./skeleton-crew-menu-dot";

export const SkeletonCrewMenu = component$(() => {
  return (
    <div class="flex gap-4 lg:gap-6 animate-pulse">
      <SkeletonCrewMenuDot />
      <SkeletonCrewMenuDot />
      <SkeletonCrewMenuDot />
      <SkeletonCrewMenuDot />
    </div>
  );
});
