import { Slot, component$ } from "@builder.io/qwik";
import { useMenuProvider } from "./menu-context";

export const Menu = component$(({ class: className }: MenuProps) => {
  useMenuProvider();

  return (
    <ul class={[className, "relative"]}>
      <Slot />
    </ul>
  );
});

export type MenuProps = {
  class?: string;
};
