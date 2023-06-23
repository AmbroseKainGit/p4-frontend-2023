import { useState, useEffect } from "react";
import { Pokemon, fetchFirst100Pokemon } from "../utils/fetchUtil";
import PokemonBox from "../components/PokemonBox";
const Home = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const getPokemonData = async () => {
    const data = await fetchFirst100Pokemon();
    setPokemonList(data);
  };
  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <div className="grid grid-cols-7 gap-4 pt-10 pl-16" id="container">
      {pokemonList &&
        pokemonList.map((pokemon) => (
          <PokemonBox key={pokemon.name } {...pokemon} />
        ))}
    </div>
  );
};

export default Home;
