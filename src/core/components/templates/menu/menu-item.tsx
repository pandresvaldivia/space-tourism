import {
  $,
  Slot,
  component$,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { useMenuContext } from "./menu-context";

export const MenuItem = component$(
  ({ active, class: className }: MenuItemProps) => {
    const itemRef = useSignal<HTMLLIElement>();
    const underline = useMenuContext();

    const setUnderlineProps = $(() => {
      if (!itemRef.value) return;

      underline.left = itemRef.value.offsetLeft;
      underline.width = itemRef.value.offsetWidth;
    });

    useVisibleTask$(({ track }) => {
      track(() => active);

      if (!active) return;

      setUnderlineProps();
    });

    const handleOnClick = $(() => {
      setUnderlineProps();
    });

    return (
      <li ref={itemRef} class={className} onClick$={handleOnClick}>
        <Slot />
      </li>
    );
  }
);

export type MenuItemProps = {
  active: boolean;
  class?: string;
};
