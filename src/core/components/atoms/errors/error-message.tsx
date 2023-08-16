import type { ClassList } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import errorMessageStyles from "@styles/atoms/error-message.module.css";

export const ErrorMessage = component$(
  ({ class: className }: ErrorMessageProps) => {
    return (
      <div
        class={[
          className,
          "flex flex-col items-center lg:items-start self-end",
        ]}
      >
        <p
          class={[
            errorMessageStyles.main,
            "text-secondary/20 font-barlow-condensed font-bold leading-none",
          ]}
        >
          404
        </p>
        <p class="text-secondary/30 text-6xl font-barlow-condensed font-bold">
          Not found
        </p>
      </div>
    );
  }
);

type ErrorMessageProps = {
  class?: ClassList;
};
