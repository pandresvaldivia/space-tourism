import { component$ } from "@builder.io/qwik";
import { Wrapper } from "@templates";
import { ErrorImage, ErrorMessage } from "@atoms";
import notFoundStyles from "@styles/modules/error/not-found.module.css";

export default component$(() => {
  return (
    <div class={[notFoundStyles.main, "flex items-center min-h-screen"]}>
      <Wrapper
        class={[
          "pt-28 mx-auto w-full flex flex-col xl:flex-row-reverse items-center justify-center gap-4 xl:gap-24",
        ]}
      >
        <ErrorImage />
        <ErrorMessage class="self-center" />
      </Wrapper>
    </div>
  );
});
