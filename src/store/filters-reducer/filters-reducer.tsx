import { createSlice } from "@reduxjs/toolkit";

interface PokemonsFavoriteState {
  sortTypeSelected: string;
  pokemonSearchInputValue: string;
}

const initialState: PokemonsFavoriteState = {
  sortTypeSelected: "name",
  pokemonSearchInputValue: "",
};

const filtersSlide = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSortTypeSelected(state, action) {
      state.sortTypeSelected = action.payload;
    },
    setPokemonSearchInputValue(state, action) {
      state.pokemonSearchInputValue = action.payload;
    },
  },
});

export const { setSortTypeSelected, setPokemonSearchInputValue } =
  filtersSlide.actions;

export default filtersSlide.reducer;
