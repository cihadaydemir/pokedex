"use client";

import { GitHub } from "@mui/icons-material";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <Link href={"https://github.com/cihadaydemir/pokedex"} target={"_blank"}>
        <GitHub fontSize="large" />
      </Link>
    </footer>
  );
};
