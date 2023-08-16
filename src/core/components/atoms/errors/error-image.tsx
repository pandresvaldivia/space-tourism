import type { ClassList } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import ImgAstronaut from "@media/astronaut.webp?jsx";
import errorImageStyles from "@styles/atoms/error-image.module.css";

export const ErrorImage = component$(
  ({ class: className }: ErrorImageProps) => {
    return (
      <div class={[errorImageStyles.main, className, "relative"]}>
        <ImgAstronaut />
        <div
          class={[
            errorImageStyles.message,
            "absolute w-full bottom-full bg-primary border border-secondary/50 rounded-lg py-3 px-4",
            "lg:-top-4 lg:left-full lg:bottom-auto",
          ]}
        >
          <p class="text-xl text-white font-semibold">
            Houston, we have a problem
          </p>
          <div
            class={[
              "absolute h-4 aspect-square bg-primary border-b border-r border-secondary/50 rotate-45 bottom-0 right-14 translate-y-1/2",
              "lg:border-l lg:border-r-0 lg:right-auto lg:left-0 lg:bottom-4 lg:-translate-x-1/2 lg:translate-y-0",
            ]}
          />
        </div>
      </div>
    );
  }
);

type ErrorImageProps = {
  class?: ClassList;
};
