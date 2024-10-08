/* eslint-disable no-extra-boolean-cast */
import { PokemonDetails } from "@/interfaces";
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
  pokemonDetails: PokemonDetails | null;
}

const initialState: PokemonsFavoriteState = {
  favorites: {},
  pokemonDetails: null,
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
    setPokemonDetails(state, action) {
      state.pokemonDetails = action.payload;
    },
  },
});

export const { toggleFavorite, setFavoritePokemons, setPokemonDetails } =
  pokemonsSlide.actions;

export default pokemonsSlide.reducer;
