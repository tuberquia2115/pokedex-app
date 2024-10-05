/* eslint-disable no-extra-boolean-cast */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SimplePokemon {
  id: string;
  name: string;
}

interface Favorites {
  [key: string]: SimplePokemon;
}

interface PokemonsFavoriteState {
  favorites: Favorites;
}

const initialState: PokemonsFavoriteState = {
  favorites: {},
};

const pokemonsSlide = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<Favorites>) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlide.actions;

export default pokemonsSlide.reducer;
