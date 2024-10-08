import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, PokemonDetails } from "@/components/pages";

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/pokemon-details/:pokemonId" Component={PokemonDetails} />
    </Routes>
  </BrowserRouter>
);
