import { component$ } from "@builder.io/qwik";
import { SkeletonDestinationMenuItem } from "./skeleton-destination-menu-item";

export const SkeletonDestinationMenu = component$(() => {
  // TODO: Create a skeleton for the menu

  return (
    <div class="flex gap-6 animate-pulse">
      <SkeletonDestinationMenuItem active />
      <SkeletonDestinationMenuItem />
      <SkeletonDestinationMenuItem />
      <SkeletonDestinationMenuItem />
    </div>
  );
});
