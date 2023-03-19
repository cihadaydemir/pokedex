"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { apiBaseUrl } from "../lib/constants";
import { capitalizeFirstLetter } from "../lib/utils";
import { Pokemon } from "../types";

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useQuery(
    ["pokemon", params.id],
    async () => {
      return (await (
        await fetch(`${apiBaseUrl}/pokemon/${params.id}`)
      ).json()) as Pokemon;
    }
    // {
    //   select: (data) => {
    //     const res = data;
    //     const pkmn: Pokemon = {
    //       name: res.name,
    //       height: res.height,
    //       stats: [data.stats.map((stat:Statistic) => {})],
    //     };
    //     return pkmn;
    //   },
    // }
  );

  return (
    <div>
      {data && (
        <>
          <h2>{capitalizeFirstLetter(data?.name)}</h2>
          <Image
            alt={data?.name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${params.id}.png`}
            width={150}
            height={150}
          />
          <p>
            {data.types.map((type, index, arr) => (
              <span key={type.slot}>
                {capitalizeFirstLetter(type.type.name)}
                {index == arr.length - 1 ? "" : "/"}
              </span>
            ))}
          </p>
          <p>Height: {data.height}m</p>
          {data?.stats.map((stat, index) => (
            <div key={index}>
              {capitalizeFirstLetter(stat.stat.name)}: {stat.base_stat}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
