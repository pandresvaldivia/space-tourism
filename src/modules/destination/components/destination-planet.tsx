import { component$ } from "@builder.io/qwik";
import { useDestinationContext } from "../providers/destination";
import destinationPlanetStyles from "@styles/modules/destination/destination-planet.module.css";
import { HeadlineGroup } from "@atoms";

export const DestinationPlanet = component$(() => {
  const { value } = useDestinationContext();
  const { image } = value.data.DestinationBySlug;
  const { alt, height, width, url } = image;

  return (
    <div class="flex flex-col items-center mb-7 md:mb-14 lg:mb-0">
      <HeadlineGroup index="01" text="Pick your destination" />
      <img
        src={url}
        alt={alt}
        height={height}
        width={width}
        class={[destinationPlanetStyles.image, "aspect-square lg:ml-16 w-full"]}
      />
    </div>
  );
});
