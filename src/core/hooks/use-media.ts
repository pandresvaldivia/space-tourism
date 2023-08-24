import { $, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export const useMedia = (query: string, defaultValue = false) => {
  const matches = useSignal(defaultValue);

  const getMatches = $((query: string): boolean => {
    return window.matchMedia(query).matches;
  });

  const handleChange = $(async () => {
    matches.value = await getMatches(query);
  });

  useVisibleTask$(({ track, cleanup }) => {
    track(() => query);

    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    matchMedia.addEventListener("change", handleChange);

    cleanup(() => matchMedia.removeEventListener("change", handleChange));
  });

  return matches;
};
