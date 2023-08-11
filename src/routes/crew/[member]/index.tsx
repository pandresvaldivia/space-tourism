import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { CrewView } from "@modules/crew/crew-view";
import { getCrewMemberBySlug } from "@services/api/crew";
import { useCrewProvider } from "~/modules/crew/providers/crew";

export const useCrewMemberDetails = routeLoader$(async (event) => {
  const { member: slug } = event.params;
  const member = await getCrewMemberBySlug(slug);

  // TODO: Redirect to 404 if destination is not found

  return member;
});

export default component$(() => {
  const member = useCrewMemberDetails();

  useCrewProvider(member);

  const { errors, data } = member.value;

  if (errors || !data) {
    return <div>Loading...</div>;
  }

  return <CrewView />;
});

export const head: DocumentHead = ({ resolveValue }) => {
  const destination = resolveValue(useCrewMemberDetails);
  const { data, errors } = destination;

  if (errors || !data) return {};

  const { title, description, image } = data.CrewMemberBySlug.meta;
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
