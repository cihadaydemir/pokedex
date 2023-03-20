"use client";

import { GitHub } from "@mui/icons-material";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "1rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link href={"https://github.com/cihadaydemir/pokedex"} target={"_blank"}>
        <GitHub fontSize="large" />
      </Link>
    </footer>
  );
};
