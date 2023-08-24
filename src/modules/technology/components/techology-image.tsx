import { component$ } from "@builder.io/qwik";
import { useTechnologyContext } from "../providers/technology";
import technologyLayoutStyles from "@styles/modules/technology/technology-layout.module.css";
import technolgyImageStyles from "@styles/modules/technology/technology-image.module.css";

export const TechologyImage = component$(() => {
  const technology = useTechnologyContext();
  const { image } = technology.value;
  const { url, alt, height, width } = image;

  return (
    <div
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
        class={[technolgyImageStyles.image, "h-full object-cover w-full"]}
      />
    </div>
  );
});
