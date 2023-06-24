import React, {
  createContext,
  useEffect,
  useState,
  ReactNode
} from "react";
import { Pokemon, fetchPokemonList } from "../utils/fetchUtil";

interface PokemonContextValue {
  pokemonList: Pokemon[];
}

interface Props {
  children: ReactNode;
}

export const PokemonContext = createContext<PokemonContextValue>({
  pokemonList: []
});

export const PokemonProvider: React.FC<Props> = ({ children }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const getPokemonData = async () => {
    const data = await fetchPokemonList();
    setPokemonList(data);
  };
  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemonList }}>
      {children}
    </PokemonContext.Provider>
  );
};
