import { IPokemonList } from "@/types/interfaces";
import { Card } from "@/components/Card";

interface IPokemonProps {
  data: {
    name: string;
    url: string;
  }[];
}

export const PokemonList = ({ data }: IPokemonProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-x-0 gap-y-5 md:gap-x-5">
      {data.map((pokemon: IPokemonList, index: number) => (
        <Card key={index} name={pokemon.name} />
      ))}
    </div>
  );
};
