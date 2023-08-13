import { component$ } from "@builder.io/qwik";
import { useMenuContext } from "./menu-context";
import menuUnderlineStyles from "@styles/templates/menu-underline.module.css";

export const MenuUnderline = component$(
  ({ class: className }: MenuUnderlineProps) => {
    const underline = useMenuContext();

    return (
      <div
        style={{
          "--left": `${underline.left}px`,
          "--width": `${underline.width}px`,
        }}
        class={[
          menuUnderlineStyles.main,
          className,
          "absolute bottom-0 transition-all duration-300 ease-out",
        ]}
      />
    );
  }
);

export type MenuUnderlineProps = {
  class?: string;
};
