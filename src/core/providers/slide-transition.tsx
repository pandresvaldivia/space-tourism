import {
  createContextId,
  useContext,
  useContextProvider,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

const slideTransitionContext = createContextId<SlideTransitionContextState>(
  "space.slide-transition-context"
);

export const useSlideTransitionProvider = () => {
  const location = useLocation();
  const transition = useStore({
    type: "animate__fadeIn",
    transition: "animate__fadeIn",
    menuIndex: 0,
  });

  useTask$(({ track }) => {
    track(() => location.url);

    transition.transition = transition.type;
  });

  useContextProvider(slideTransitionContext, transition);
};

type SlideTransitionContextState = {
  type: string;
  menuIndex: number;
  transition: string;
};

export const useSlideTransitionContext = () =>
  useContext(slideTransitionContext);
