import {
  createContextId,
  useContext,
  useContextProvider,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

const crewTransitionContext = createContextId<CrewTransitionContextState>(
  "space.crew.transition-context"
);

export const useCrewTransitionProvider = () => {
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

  useContextProvider(crewTransitionContext, transition);
};

type CrewTransitionContextState = {
  type: string;
  menuIndex: number;
  transition: string;
};

export const useCrewTransitionContext = () => useContext(crewTransitionContext);
