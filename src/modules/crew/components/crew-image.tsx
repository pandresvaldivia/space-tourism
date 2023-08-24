import "animate.css";
import { component$ } from "@builder.io/qwik";
import crewLayoutStyles from "@styles/modules/crew/crew-layout.module.css";
import crewImageStyles from "@styles/modules/crew/crew-image.module.css";
import { useCrewContext } from "../providers/crew";
import { useSlideTransitionContext } from "@contexts";

export const CrewImage = component$(() => {
  const crewMember = useCrewContext();
  const { transition } = useSlideTransitionContext();

  const { image } = crewMember.value;
  const { url, alt, height, width } = image;

  return (
    <div
      key={url}
      class={[
        crewImageStyles.main,
        crewLayoutStyles.image,
        "flex justify-center lg:justify-end items-end border-b mb-8 md:mb-0 w-full max-w-md md:max-w-none mx-auto",
      ]}
    >
      <img
        src={url}
        height={height}
        width={width}
        class={[
          crewImageStyles.image,
          transition,
          "w-auto",
          "animate__animated",
        ]}
        alt={alt}
      />
    </div>
  );
});
