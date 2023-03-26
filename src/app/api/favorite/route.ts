import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

type FavoriteRequest = {
  pokemonId: number;
  userId: number;
};

export async function GET() {
  return NextResponse.json({ name: "test" });
}
export async function POST(req: NextRequest) {
  const data = (await req.json()) as FavoriteRequest;
  console.log("data", data);
  const userId = data.userId;
  const pokemonId = data.pokemonId;
  console.log("userId", userId);
  console.log("pokemonId", pokemonId);

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { favorites: true },
  });

  if (!user) {
    throw new Error(`User with id ${userId} not found`);
  }

  const pokemon = await prisma.pokemon.findUnique({
    where: { id: pokemonId },
  });

  if (!pokemon) {
    throw new Error(`Pokemon with id ${pokemonId} not found`);
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { favorites: { connect: { id: pokemonId } } },
    include: { favorites: true },
  });

  console.log(updatedUser.favorites);

  return NextResponse.json(updatedUser.favorites);
}
