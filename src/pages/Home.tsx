import { useEffect } from "react";
import PokemonBox from "../components/PokemonBox";
import { usePokemonContext } from "../context/ContextProvider";
const Home = () => {
  const { pokemonListCopy, reset } = usePokemonContext();
  useEffect(() => {
    reset();
    // Im certain reset its not going to change so dont need it in the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-full bg-[#C97D60] overflow-y-scroll">
      {pokemonListCopy && pokemonListCopy.length > 0 && (
        <div className="grid grid-cols-9 gap-4 pt-10 w-full" id="container">
          {pokemonListCopy.map((pokemon) => (
            <PokemonBox key={pokemon.name} {...pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
