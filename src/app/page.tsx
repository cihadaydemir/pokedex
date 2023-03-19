import { Inter } from "next/font/google";
import { PokeCard } from "./components/PokeCard";
const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://pokeapi.co/api/v2/";

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
  const res = await fetch(`${baseUrl}/pokemon`);
  const data: Response = await res.json();

  return (
    <main>
      <h3>Total results: {data.count}</h3>
      <div className="pokegrid">
        {data.results?.map((entry, index) => (
          <PokeCard key={index} name={entry.name} index={index} />
        ))}
      </div>
    </main>
  );
}
