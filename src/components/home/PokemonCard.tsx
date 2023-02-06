import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface PokemonCardProps {
    pokemon: {
        id: number;
        image: string;
        name: string;
        url: string;
    };
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
    const router = useRouter();

    const { name } = pokemon;

    return (
        <Link href={`/pokemon/${name}`}>
            <div className="bg-white hover:bg-blue-500 hover:text-white p-2 rounded-md pokemon_card">
                {/* image  */}
                <div className="h-52 bg-gray-100 rounded-md relative flex justify-center items-center">
                    <p className="absolute top-2 left-3 text-sm text-black">
                        #{pokemon?.id}
                    </p>
                    <Image
                        className="pokemon_image w-4/5"
                        src={pokemon?.image}
                        width="100"
                        height="100"
                        alt="Pokemon"
                    />
                </div>
                {/* pokemon name  */}
                <h2 className="my-2 text-base font-medium capitalize">
                    {pokemon?.name}
                </h2>
                {/* button  */}
                <div>
                    <button
                        className="px-4 py-1 text-sm text-white rounded-md"
                        style={{ background: "#9BCC50" }}
                    >
                        Grass
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default PokemonCard;
