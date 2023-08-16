import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { CrewView } from "@modules/crew/crew-view";
import { getCrewMemberBySlug } from "@services/api/crew";
import { CrewNotFound } from "@modules/crew/components/error/crew-not-found";
import { NOT_FOUND_METADATA } from "@constants/metatag";

export const useCrewMemberDetails = routeLoader$(async ({ params, status }) => {
  const { member: slug } = params;
  const crewMember = await getCrewMemberBySlug(slug);
  const crewMemberData = crewMember.CrewMemberBySlug;

  if (!crewMemberData) {
    status(404);
  }

  return crewMemberData;
});

export default component$(() => {
  const crewMember = useCrewMemberDetails();

  if (!crewMember.value) {
    return <CrewNotFound />;
  }

  return <CrewView crewMember={crewMember} />;
});

export const head: DocumentHead = ({ resolveValue }) => {
  const destination = resolveValue(useCrewMemberDetails);

  if (!destination) {
    return NOT_FOUND_METADATA;
  }

  const { meta } = destination;

  const { title, description, image } = meta;
  const { url: thumbnail } = image;

  return {
    title: title,
    meta: [
      {
        name: "description",
        content: description,
      },
      {
        name: "og:title",
        content: title,
      },
      {
        name: "og:description",
        content: description,
      },
      {
        name: "og:image",
        content: thumbnail,
      },
    ],
  };
};
