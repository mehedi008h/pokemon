import { GET_POKEMON } from "@/graphql/pokemon";
import { PokemonData } from "@/utils/types";
import { useQuery } from "@apollo/client";
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

    // fetch data using graphql client
    const { loading, error, data } = useQuery<PokemonData>(GET_POKEMON, {
        variables: {
            name,
        },
        onError: ({ message }) => {
            alert(message);
        },
    });

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
                <div className="flex gap-3">
                    {data?.pokemon?.types?.map((pokemonType, index) => (
                        <button
                            key={index}
                            className="px-4 py-1 text-sm text-white rounded-md capitalize"
                            style={{
                                background: `${
                                    pokemonType?.type?.name === "grass"
                                        ? "#9BCC50"
                                        : pokemonType?.type?.name === "poison"
                                        ? "#B97FC9"
                                        : pokemonType?.type?.name === "fire"
                                        ? "#FC7C23"
                                        : pokemonType?.type?.name === "water"
                                        ? "#4592C4"
                                        : "#729F3F"
                                }`,
                            }}
                        >
                            {pokemonType?.type?.name}
                        </button>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default PokemonCard;
