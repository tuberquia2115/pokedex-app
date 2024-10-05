import { Action, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "@/store";

function isToggleFavoriteAction(
  action: Action
): action is Action & { type: string } {
  return action.type === "pokemons/toggleFavorite";
}

export const localStorageMiddleware: Middleware = (state: MiddlewareAPI) => {
  return (next) => (action) => {
    next(action);

    if (isToggleFavoriteAction(action as Action)) {
      const { pokemons } = state.getState() as RootState;
      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(pokemons.favorites)
      );
      return;
    }
  };
};
