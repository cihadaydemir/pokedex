import { NextPageContext } from "next";
import Link from "next/link";
import { PokeCard } from "./components/PokeCard";

type Response = {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonEntry[];
};

type PokemonEntry = {
  name: string;
  url: string;
};

export default async function Home() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const data: Response = await response.json();  

  return (
    <main>
      <h3>Total results: {data.count}</h3>
      <div className="pokegrid">
        {data.results?.map((entry, index) => (
          <Link key={index} href={`/pokemon/${index + 1}`}>
            <PokeCard name={entry.name} index={index} />
          </Link>
        ))}
      </div>
    </main>
  );
}
