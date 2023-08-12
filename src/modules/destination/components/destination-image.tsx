import type { QwikAnimationEvent } from "@builder.io/qwik";
import { $, component$ } from "@builder.io/qwik";
import { useDestinationContext } from "../providers/destination";
import destinationImageStyles from "@styles/modules/destination/destination-image.module.css";
import destinationLayoutStyles from "@styles/modules/destination/destination-layout.module.css";

export const DestinationImage = component$(() => {
  const { value } = useDestinationContext();
  const { image } = value.data.DestinationBySlug;
  const { alt, height, width, url } = image;

  const handleAnimationEnd = $((event: QwikAnimationEvent<HTMLDivElement>) => {
    const element = event.target as HTMLDivElement;

    element.classList.remove("animate__zoomIn", "animate__animated");
    element.classList.add(destinationImageStyles.float);

    console.log({ target: typeof event.target });
  });

  return (
    <div
      key={url}
      class={[
        destinationLayoutStyles.image,
        "flex justify-center lg:justify-start lg:items-end xl:ml-16",
        "animate__animated animate__zoomIn",
      ]}
      onAnimationEnd$={handleAnimationEnd}
    >
      <img
        src={url}
        alt={alt}
        height={height}
        width={width}
        class={[destinationImageStyles.image, "aspect-square w-full"]}
      />
    </div>
  );
});
