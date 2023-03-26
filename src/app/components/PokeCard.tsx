"use client";

import { Add } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import { capitalizeFirstLetter } from "../lib/utils";

export const PokeCard = ({ name, index }: { name: string; index: number }) => {
  return (
    <div className="pokecard">
      <Stack direction={"row"} alignItems={"center"}>
        <p style={{ textAlign: "center" }}>{capitalizeFirstLetter(name)}</p>
        <IconButton style={{ justifySelf: "flex-end" }}>
          <Add color="warning" />
        </IconButton>
      </Stack>

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
