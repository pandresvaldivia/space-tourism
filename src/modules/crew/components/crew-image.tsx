import { component$ } from "@builder.io/qwik";
import crewLayoutStyles from "@styles/modules/crew/crew-layout.module.css";
import crewImageStyles from "@styles/modules/crew/crew-image.module.css";
import { useCrewContext } from "../providers/crew";

export const CrewImage = component$(() => {
  const { value } = useCrewContext();
  const { image } = value.data.CrewMemberBySlug;
  const { url, alt, height, width } = image;

  return (
    <div
      class={[
        crewImageStyles.main,
        crewLayoutStyles.image,
        "flex justify-center lg:justify-end items-end border-b mb-8 md:mb-0 w-full max-w-md mx-auto lg:max-w-none",
      ]}
    >
      <img
        src={url}
        height={height}
        width={width}
        class={[crewImageStyles.image, "w-auto"]}
        alt={alt}
      />
    </div>
  );
});
