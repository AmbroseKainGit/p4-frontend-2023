import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Pokemon } from "../utils/fetchUtil";
import { PokemonContext } from "../context/ContextProvider";

const Detail = () => {
  const { pokemonList } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      const selectedPokemon = pokemonList.find(
        (pokemon) => pokemon.id === parseInt(params.id)
      );
      setPokemon(selectedPokemon ? selectedPokemon : null);
    }
  }, [pokemonList, params.id]);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="text-center capitalize mb-2 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {pokemon?.name}
        </h5>
        <div
          className="w-40 h-40 cursor-pointer bg-center self-center"
          style={{
            backgroundImage: `url(${pokemon?.sprites.front_shiny})`,
            transition: "background-image 0.3s ease"
          }}
        ></div>
         <h5 className="text-center capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Moves
        </h5>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
        <a
          href="#"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          See our guideline
          <svg
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Detail;
