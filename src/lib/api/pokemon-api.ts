import { pokemonIdSchema, pokemonListSchema } from "@/lib/zod/schema";
import { IPokemonList } from "@/types/interfaces";

const POKEMON_API_URL = "https://pokeapi.co/api/v2";

export async function getPokemonList(): Promise<IPokemonList[]> {
  const response = await fetch(
    `${POKEMON_API_URL}/pokemon?limit=150&offset=0`,
    { cache: "force-cache" }
  );
  const data = await response.json();
  return pokemonListSchema.parse(data).results;
}

export async function getPokemonSearchList({
  query,
}: {
  query?: string;
}): Promise<IPokemonList[]> {
  const pokemonList = await getPokemonList();
  if (query)
    return pokemonList.filter((pokemon) =>
      pokemon.name.includes(query.toLowerCase())
    );
  return pokemonList;
}

export async function getPokemon(name: string) {
  const response = await fetch(
    `${POKEMON_API_URL}/pokemon/${name.toLowerCase()}`,
    { cache: "force-cache" }
  );
  const data = await response.json();
  return pokemonIdSchema.parse(data);
}
