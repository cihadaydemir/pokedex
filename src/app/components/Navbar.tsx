"use client";

import { GitHub } from "@mui/icons-material";
import { Avatar, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
export const Navbar = () => {
  const session = useSession();
  return (
    <nav className="nav">
      <Link href={"/"}>
        <h1>Pokédex</h1>
      </Link>

      {session.status === "unauthenticated" && (
        <Button
          color="inherit"
          disableRipple
          variant="outlined"
          onClick={() => signIn("github")}
          startIcon={<GitHub />}
        >
          Sign in with GitHub
        </Button>
      )}
      {session.status === "authenticated" && (
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          {session.data.user?.image && (
            <Avatar sx={{ width: 36, height: 36 }}>
              <Image
                width={36}
                height={36}
                src={session.data.user?.image}
                alt={`${session.data.user?.name} Image`}
              />
            </Avatar>
          )}
          <Typography>{session.data.user?.name}</Typography>
          <Button
            color="inherit"
            disableRipple
            variant="outlined"
            onClick={() => signOut()}
          >
            Sign out
          </Button>
        </Stack>
      )}
    </nav>
  );
};
