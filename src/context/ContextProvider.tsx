import React, { createContext, useEffect, useState, ReactNode } from "react";
import { Pokemon, fetchPokemonList } from "../utils/fetchUtil";

interface PokemonContextValue {
  pokemonList: Pokemon[];
  pokemonListCopy: Pokemon[];
  filterPokemon: (name: string) => void;
}

interface Props {
  children: ReactNode;
}

export const PokemonContext = createContext<PokemonContextValue>({
  pokemonList: [],
  pokemonListCopy: [],
  filterPokemon: () => []
});

export const PokemonProvider: React.FC<Props> = ({ children }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pokemonListCopy, setPokemonListCopy] = useState<Pokemon[]>([]);
  const getPokemonData = async () => {
    const data = await fetchPokemonList();
    setPokemonList(data);
    setPokemonListCopy(data);
  };
  const filterPokemon = (name: string) => {
    const original = [...pokemonList];
    const copy = original.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
    );
    setPokemonListCopy(copy);
  };
  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemonList, filterPokemon, pokemonListCopy }}>
      {children}
    </PokemonContext.Provider>
  );
};
