import { component$ } from "@builder.io/qwik";
import { useTechnologyContext } from "../providers/technology";
import technologyLayoutStyles from "@styles/modules/technology/technology-layout.module.css";
import technolgyImageStyles from "@styles/modules/technology/technology-image.module.css";
import { useSlideTransitionContext } from "@contexts";

export const TechologyImage = component$(() => {
  const technology = useTechnologyContext();
  const { transition } = useSlideTransitionContext();

  const { image } = technology.value;
  const { url, alt, height, width } = image;

  return (
    <div
      key={url}
      class={[
        technologyLayoutStyles.image,
        technolgyImageStyles.main,
        "mb-8 md:mb-14 lg:mb-0",
      ]}
    >
      <img
        src={url}
        height={height}
        width={width}
        alt={alt}
        class={[
          technolgyImageStyles.image,
          transition,
          "h-full object-cover w-full",
          "animate__animated",
        ]}
      />
    </div>
  );
});
