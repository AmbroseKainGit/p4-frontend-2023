import { useState, useEffect } from "react";
import { Pokemon, fetchFirst100Pokemon } from "../utils/fetchUtil";
const Home = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const getPokemonData = async () => {
    const data = await fetchFirst100Pokemon();
    setPokemonList(data);
  };
  useEffect(() => {
    getPokemonData();
  }, []);

  return <div>Home</div>;
};

export default Home;
