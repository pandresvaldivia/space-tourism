import { component$ } from "@builder.io/qwik";
import { SkeletonDestinationMenuItem } from "./skeleton-destination-menu-item";

export const SkeletonDestinationMenu = component$(() => {
  // TODO: Create a skeleton for the menu

  return (
    <div>
      <SkeletonDestinationMenuItem />
    </div>
  );
});
