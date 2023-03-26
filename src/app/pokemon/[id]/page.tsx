import Image from "next/image";
import { apiBaseUrl } from "../../lib/constants";
import { capitalizeFirstLetter } from "../../lib/utils";
import { Pokemon } from "../../types";

export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(`${apiBaseUrl}/pokemon/${params.id}`);
  const data: Pokemon = await res.json();

  return (
    <div>
      {data && (
        <main>
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
        </main>
      )}
    </div>
  );
}
