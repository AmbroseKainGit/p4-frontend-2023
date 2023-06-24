import { useContext } from "react";
import PokemonBox from "../components/PokemonBox";
import { PokemonContext } from "../context/ContextProvider";
const Home = () => {
  const { pokemonList } = useContext(PokemonContext);
  return (
    <div className="grid grid-cols-9 gap-4 pt-10 bg-[#C97D60] w-full" id="container">
      {pokemonList &&
        pokemonList.map((pokemon) => (
          <PokemonBox key={pokemon.name} {...pokemon} />
        ))}
    </div>
  );
};

export default Home;
