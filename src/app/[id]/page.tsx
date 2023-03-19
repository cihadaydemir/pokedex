"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { apiBaseUrl } from "../lib/constants";

type Pokemon = {
  name: string;
  height: number;
};

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useQuery(
    ["pokemon", params.id],
    async () => {
      const res = await fetch(`${apiBaseUrl}/pokemon/${params.id}`);
      const data = await res.json();
      return data;
    },
    {
      select: (data) => {
        const res = data;
        const pkmn: Pokemon = { name: res.name, height: res.height };
        return pkmn;
      },
    }
  );

  return (
    <div>
      {data && (
        <>
          <h2>{data?.name}</h2>
          <Image
            alt={data?.name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${params.id}.png`}
            width={150}
            height={150}
          />
          <p>Height: {data.height}</p>
        </>
      )}
    </div>
  );
}
