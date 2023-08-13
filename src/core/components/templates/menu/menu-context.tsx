import {
  createContextId,
  useContext,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";

const MenuContext = createContextId<NavMenuContextState>("space.menu-context");

export const useMenuProvider = () => {
  const underline = useStore({
    left: 0,
    width: 0,
  });

  useContextProvider(MenuContext, underline);
};

type NavMenuContextState = {
  left: number;
  width: number;
};

export const useMenuContext = () => useContext(MenuContext);
