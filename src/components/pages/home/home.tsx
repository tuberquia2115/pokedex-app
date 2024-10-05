import { GET_POKEMONS } from "@/graphql";
import { useQuery } from "@apollo/client";
import { PokemonData } from "@/interfaces";
import { Title } from "@/components/atoms";
import { SearchBar } from "@/components/molecules";
import { PokedexList } from "@/components/organisms";

export const Home = () => {
  const { data, error, loading } = useQuery<PokemonData>(GET_POKEMONS, {
    variables: { limit: 20 },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error!</p>;

  return (
    <>
      <Title />
      <SearchBar />
      <PokedexList pokemons={data!.pokemon_v2_pokemon} />
    </>
  );
};
