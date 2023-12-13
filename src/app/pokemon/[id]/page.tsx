import { getPokemon } from "@/lib/api/pokemon-api";
import { Metadata } from "next";
import Image from "next/image";
import { colors } from "@/lib/colors";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: params.id,
  };
}

export default async function Pokemon({ params }: { params: { id: string } }) {
  const { stats, types, sprites } = await getPokemon(params.id);
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="card w-full mx-10 md:max-w-lg shadow-xl border">
        <figure className="relative w-full h-44 mt-10">
          <Image
            src={sprites.other.dream_world.front_default}
            alt={params.id}
            fill
            className="p-4"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title capitalize text-3xl">{params.id}</h2>
          <div className="card-actions justify-end">
            {types.map((type, index) => (
              <div
                key={index}
                style={{ border: `2px solid ${colors[type.type.name]}` }}
                className="badge badge-outline font-sans capitalize font-semibold text-md"
              >
                {type.type.name}
              </div>
            ))}
          </div>
          <div className="mt-5">
            {stats.map((stat, index) => (
              <div key={index} className="capitalize text-md">
                {stat.stat.name} : {stat.base_stat}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
