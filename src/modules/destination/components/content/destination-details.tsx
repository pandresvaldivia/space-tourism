import { component$ } from "@builder.io/qwik";
import { DestinationDetail } from "./destination-detail";
import { useDestinationContext } from "../../providers/destination";
import destinationDetailsStyles from "@styles/modules/destination/destination-details.module.css";
import { useLocation } from "@builder.io/qwik-city";

export const DestinationDetails = component$(() => {
  const { pathname } = useLocation().url;
  const { value } = useDestinationContext();

  const { distance, travel_time } = value.data.DestinationBySlug;

  return (
    <section
      key={pathname}
      class={[
        destinationDetailsStyles.main,
        "flex flex-col md:flex-row gap-8 md:gap-24 md:justify-center lg:justify-start text-center lg:text-left",
        "animate__animated",
      ]}
      aria-label="Destination details"
    >
      <DestinationDetail title="avg. distance" content={distance} />
      <DestinationDetail title="est. travel time" content={travel_time} />
    </section>
  );
});
