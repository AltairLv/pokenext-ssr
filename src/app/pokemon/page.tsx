import { Navbar } from "@/components/Navbar";
import { PokemonList } from "@/components/PokemonList";
import { getPokemonSearchList } from "@/lib/api/pokemon-api";
import { Count } from "@/components/Count";

export default async function PokemonPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const search = searchParams.search ? searchParams.search : undefined;
  const data = await getPokemonSearchList({ query: search });

  return (
    <div className="mb-16">
      <Navbar search={search} />
      <div className="block mt-5">
        <span>Listed </span>
        <span className="font-semibold">
          <Count end={data.length} />{" "}
        </span>
        <span>Pokémon.</span>
      </div>
      <div className="mt-10">
        <PokemonList data={data} />
      </div>
    </div>
  );
}
