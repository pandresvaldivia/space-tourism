import type { ClassList } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import headlineGroupStyles from "@styles/atoms/headline-group.module.css";

export const HeadlineGroup = component$(
  ({ index, text, class: className }: HeadlineGroupProps) => {
    return (
      <h2
        class={[
          headlineGroupStyles.main,
          className,
          "flex justify-center gap-4 text-white font-barlow-condensed tracking-subtitle uppercase",
        ]}
      >
        <span class="opacity-25 font-bold">{index}</span>
        <span>{text}</span>
      </h2>
    );
  }
);

type HeadlineGroupProps = {
  index: string;
  text: string;
  class?: ClassList;
};
