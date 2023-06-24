interface PokemonList {
    name: string;
    url: string;
}
export interface Pokemon {
    abilities: [];
    base_experience: number;
    forms: [];
    game_indices: [];
    height: number;
    held_items: [];
    id: number | string;
    is_default: boolean;
    location_area_encounters: string;
    moves: [];
    name: string;
    order: number;
    past_types: [];
    species: { name: string, url: string };
    sprites: {
        back_default: string | null
        back_female: string | null
        back_shiny: string | null
        back_shiny_female: string | null
        front_default: string | null
        front_female: string | null
        front_shiny: string | null
        front_shiny_female: string | null
    };
    stats: []
    types: []
    weight: number
}
interface PokemonResponse {
    count: number
    next: string
    previous: null
    results: PokemonList[]
}

export const fetchPokemonList = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
        const data: PokemonResponse = await response.json();
        const pokemonList: PokemonList[] = data.results;
        const pokemonUrls: string[] = pokemonList.map(pokemon => pokemon.url);
        const pokemonResponses: Pokemon[] = await Promise.all(
            pokemonUrls.map(url => fetch(url).then(response => response.json()))
        );
        return pokemonResponses;
    } catch (error) {
        console.error("Error:", error);
        return [];
    }
}

export const fetchPokemonById = async (id: string) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data: Pokemon = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        return {} as Pokemon;
    }
}