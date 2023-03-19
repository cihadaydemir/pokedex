"use client";

import Image from "next/image";
import { capitalizeFirstLetter } from "../lib/utils";

export const PokeCard = ({ name, index }: { name: string; index: number }) => {
  return (
    <div className="pokecard">
      <p style={{ textAlign: "center" }}>{capitalizeFirstLetter(name)}</p>
      <Image
        alt={name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`}
        width={100}
        height={100}
      />
    </div>
  );
};
