import { logo, pokemonImage, sideImage } from "@/assets";
import { GET_POKEMON } from "@/graphql/pokemon";
import { PokemonData, PokemonVariables } from "@/utils/types";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, Fragment } from "react";
import { AiFillHome } from "react-icons/ai";

interface SingleStat {
    base_stat: number;
    stat: {
        name: string;
    };
}
interface PokemonType {
    type: {
        name: string;
    };
}

const PokemonDetails = () => {
    const router = useRouter();

    const {
        query: { name },
    } = router;

    const { loading, error, data } = useQuery<PokemonData>(GET_POKEMON, {
        variables: {
            name,
        },
        onError: ({ message }) => {
            alert(message);
        },
    });

    return (
        <div>
            <div className="w-full h-screen flex justify-between gap-8">
                {/* left  */}
                <div className="h-screen">
                    <Image className="h-full" src={sideImage} alt="left" />
                </div>
                {/* center  */}
                <div className="my-12 w-full">
                    <div className="flex justify-center">
                        <Image src={logo} alt="logo" />
                    </div>
                    {loading ? (
                        <h2>Loading</h2>
                    ) : (
                        <Fragment>
                            <div className="grid grid-cols-12 gap-4 mt-24">
                                <div className="col-span-4 pr-8">
                                    <h1
                                        className="font-medium text-4xl"
                                        style={{ color: "#257BC4" }}
                                    >
                                        {data?.pokemon?.name} #
                                        {data?.pokemon?.id}
                                    </h1>
                                    <p className="my-6">
                                        There is a plant seed on its back right
                                        from the day this Pokémon is born. The
                                        seed slowly grows larger.
                                    </p>
                                    <div className="border-4 rounded-md py-4 px-8 grid grid-cols-12 mt-12 w-4/5 round_corner">
                                        <div className="col-span-6">
                                            <div>
                                                <h3 className="font-semibold text-base">
                                                    Height
                                                </h3>
                                                <p className="mt-2">
                                                    {data?.pokemon?.height}
                                                </p>
                                            </div>
                                            <div className="mt-6">
                                                <h3 className="font-semibold text-base">
                                                    Weight
                                                </h3>
                                                <p className="mt-2">
                                                    {data?.pokemon?.weight}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-span-6">
                                            <div>
                                                <h3 className="font-semibold text-base">
                                                    Category
                                                </h3>
                                                <p className="mt-2">Seed</p>
                                            </div>
                                            <div className="mt-6">
                                                <h3 className="font-semibold text-base">
                                                    Abilities
                                                </h3>
                                                {data?.pokemon?.abilities?.map(
                                                    (pokemonAbilitie, i) => (
                                                        <p
                                                            key={i}
                                                            className="mt-2 capitalize"
                                                        >
                                                            {
                                                                pokemonAbilitie
                                                                    ?.ability
                                                                    ?.name
                                                            }
                                                        </p>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* image  */}
                                <div className="col-span-4 pokemon_details">
                                    <Image
                                        className="w-11/12 pokemon_image"
                                        src={pokemonImage}
                                        alt="pokemon"
                                    />
                                </div>
                                <div className="col-span-4 flex flex-col gap-6 pl-8">
                                    {/* type  */}
                                    <div>
                                        <h3 className="font-medium text-lg">
                                            Type
                                        </h3>
                                        <div className="mt-3 flex gap-3">
                                            {data?.pokemon?.types?.map(
                                                (pokemonType, index) => (
                                                    <button
                                                        key={index}
                                                        className="px-4 py-1 text-sm text-white rounded-md capitalize"
                                                        style={{
                                                            background:
                                                                "#9BCC50",
                                                        }}
                                                    >
                                                        {
                                                            pokemonType?.type
                                                                ?.name
                                                        }
                                                    </button>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    {/* Weaknesses */}
                                    <div>
                                        <h3 className="font-medium text-lg">
                                            Weaknesses
                                        </h3>
                                        <div className="mt-3 flex gap-3">
                                            <button
                                                className="px-4 py-1 text-sm text-white rounded-md"
                                                style={{
                                                    background: "#FC7C23",
                                                }}
                                            >
                                                Fire
                                            </button>
                                            <button
                                                className="px-4 py-1 text-sm text-white rounded-md"
                                                style={{
                                                    background: "#F366B9",
                                                }}
                                            >
                                                Phychic
                                            </button>
                                            <button
                                                className="px-4 py-1 text-sm text-white rounded-md"
                                                style={{
                                                    background: "#9BCC50",
                                                }}
                                            >
                                                Flying
                                            </button>
                                            <button
                                                className="px-4 py-1 text-sm text-white rounded-md"
                                                style={{
                                                    background: "#3DC7EF",
                                                }}
                                            >
                                                Ice
                                            </button>
                                        </div>
                                    </div>
                                    {/* stats */}
                                    <div>
                                        <h3 className="font-medium text-lg">
                                            Stats
                                        </h3>
                                        <div className="mt-4 flex flex-col gap-3">
                                            {data?.pokemon?.stats.map(
                                                (singleStat, i) => (
                                                    <div key={i}>
                                                        <p className="capitalize">
                                                            {
                                                                singleStat?.stat
                                                                    ?.name
                                                            }
                                                        </p>
                                                        <div className="bg-gray-200 h-1 w-full mt-2 rounded-md">
                                                            <div
                                                                className="h-1 rounded-md"
                                                                style={{
                                                                    width: `${singleStat?.base_stat}%`,
                                                                    background:
                                                                        "#30A7D7",
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )}
                </div>
                {/* right  */}
                <div className="h-screen">
                    <Image className="h-full" src={sideImage} alt="right" />
                </div>
            </div>
            <div className="flex justify-center mb-12">
                <Link
                    href={"/"}
                    className="bg-yellow-500 px-6 py-2 border-4 border-blue-500 text-white flex items-center gap-2"
                >
                    <AiFillHome size={20} /> Back to Homepage
                </Link>
            </div>
        </div>
    );
};

export default PokemonDetails;
