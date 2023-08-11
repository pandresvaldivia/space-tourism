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
        "flex justify-center border-b mb-8",
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
