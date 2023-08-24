import { component$ } from "@builder.io/qwik";
import { useHeaderMenuProvider } from "@providers";
import { MobileHeader, DesktopHeader } from "@organisms";
import { useMedia } from "@hooks";
import { MEDIA_QUERY } from "@constants/media-query";

export const MainHeader = component$(() => {
  useHeaderMenuProvider();
  const fromMd = useMedia(MEDIA_QUERY.MD, true);

  if (fromMd.value) return <DesktopHeader />;

  return <MobileHeader />;
});
