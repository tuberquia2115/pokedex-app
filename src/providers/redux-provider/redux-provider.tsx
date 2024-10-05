import { PropsWithChildren, useEffect } from "react";
import { Provider } from "react-redux";

import { setFavoritePokemons, store } from "@/store";

export const ReduxProvider = ({ children }: PropsWithChildren) => {
  const getInitialState = () => {
    // if (typeof localStorage === 'undefined') return {} TODO: Es una manejar se validar exista en el lado del cliente

    const favorites = JSON.parse(
      localStorage.getItem("favorite-pokemons") ?? "{}"
    );
    store.dispatch(setFavoritePokemons(favorites));
  };

  useEffect(getInitialState, []);

  return <Provider store={store}>{children}</Provider>;
};
