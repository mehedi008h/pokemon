import { logo, pokemon, sideImage } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AiFillHome } from "react-icons/ai";

interface IPokemonDetailsProps {}

const PokemonDetails: FC<IPokemonDetailsProps> = (props) => {
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
                    <div className="grid grid-cols-12 gap-4 mt-24">
                        <div className="col-span-4 pr-8">
                            <h1
                                className="font-medium text-4xl"
                                style={{ color: "#257BC4" }}
                            >
                                Bulbasaur #0078
                            </h1>
                            <p className="my-6">
                                There is a plant seed on its back right from the
                                day this Pokémon is born. The seed slowly grows
                                larger.
                            </p>
                            <div className="border-4 rounded-md py-4 px-8 grid grid-cols-12 mt-12 w-4/5 round_corner">
                                <div className="col-span-6">
                                    <div>
                                        <h3 className="font-semibold text-base">
                                            Height
                                        </h3>
                                        <p className="mt-2">2` 04``</p>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="font-semibold text-base">
                                            Weight
                                        </h3>
                                        <p className="mt-2">2` 04``</p>
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
                                        <p className="mt-2">Overgrow</p>
                                        <p>Blaze</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* image  */}
                        <div className="col-span-4 pokemon_details">
                            <Image
                                className="w-11/12 pokemon_image"
                                src={pokemon}
                                alt="pokemon"
                            />
                        </div>
                        <div className="col-span-4 flex flex-col gap-6 pl-8">
                            {/* type  */}
                            <div>
                                <h3 className="font-medium text-lg">Type</h3>
                                <div className="mt-3 flex gap-3">
                                    <button
                                        className="px-4 py-1 text-sm text-white rounded-md"
                                        style={{ background: "#9BCC50" }}
                                    >
                                        Grass
                                    </button>
                                    <button
                                        className="px-4 py-1 text-sm text-white rounded-md"
                                        style={{ background: "#9BCC50" }}
                                    >
                                        Grass
                                    </button>
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
                                        style={{ background: "#9BCC50" }}
                                    >
                                        Grass
                                    </button>
                                    <button
                                        className="px-4 py-1 text-sm text-white rounded-md"
                                        style={{ background: "#9BCC50" }}
                                    >
                                        Grass
                                    </button>
                                </div>
                            </div>
                            {/* stats */}
                            <div>
                                <h3 className="font-medium text-lg">Stats</h3>
                                <div className="mt-4 flex flex-col gap-3">
                                    <div>
                                        <p>HP</p>
                                        <div className="bg-gray-200 h-1 w-80 mt-2 rounded-md progress_bar_animation">
                                            <div
                                                className="h-1 rounded-md "
                                                style={{
                                                    width: "75%",
                                                    background: "#30A7D7",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>HP</p>
                                        <div className="bg-gray-200 h-1 w-80 mt-2 rounded-md">
                                            <div
                                                className="h-1 rounded-md"
                                                style={{
                                                    width: "50%",
                                                    background: "#30A7D7",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>HP</p>
                                        <div className="bg-gray-200 h-1 w-80 mt-2 rounded-md">
                                            <div
                                                className="h-1 rounded-md"
                                                style={{
                                                    width: "85%",
                                                    background: "#30A7D7",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
