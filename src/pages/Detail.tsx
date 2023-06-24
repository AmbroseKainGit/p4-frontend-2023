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
      <div className="flex flex-col max-w-2xl min-w-[40rem] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#C97D60] dark:border-[#321325]">
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
        <div className="text-white grid grid-cols-3 gap-4 w-full">
          <div className="flex flex-col items-center">
            <h5 className="text-center capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Moves
            </h5>
            <ol className="dark:text-white capitalize ">
              {pokemon?.moves.map(
                (move, index) =>
                  index <= 5 && (
                    <li key={move.move.name} className="list-disc">
                      {move.move.name}
                    </li>
                  )
              )}
            </ol>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-center capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              stats
            </h5>
            <ol className="dark:text-white capitalize">
              {pokemon?.stats.map((stat, index) => (
                <li key={stat.stat.name} className="list-disc">
                  {stat.stat.name} : {stat?.base_stat}
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-center capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              types
            </h5>
            <ol className="dark:text-white capitalize">
              {pokemon?.types.map((type, index) => (
                <li className="list-disc" key={type?.type.name}>
                  {type?.type.name}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Detail;
