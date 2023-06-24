import { useContext } from "react";
import PokemonBox from "../components/PokemonBox";
import { PokemonContext } from "../context/ContextProvider";
const Home = () => {
  const { pokemonListCopy } = useContext(PokemonContext);
  return (
    <div className="h-full bg-[#C97D60] overflow-y-scroll">
      {(pokemonListCopy && pokemonListCopy.length > 0) && (
        <div
          className="grid grid-cols-9 gap-4 pt-10 w-full"
          id="container"
        >
          {pokemonListCopy.map((pokemon) => (
            <PokemonBox key={pokemon.name} {...pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
