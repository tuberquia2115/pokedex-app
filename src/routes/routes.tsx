import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FavoritePokemons, Home, PokemonDetails } from "@/components/pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/pokemon-details/:pokemonId" Component={PokemonDetails} />
        <Route path="/favorite-pokemons" Component={FavoritePokemons} />
      </Routes>
    </BrowserRouter>
  );
};
