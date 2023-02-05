import { logo } from "@/assets";
import Image from "next/image";
import React, { FC } from "react";
import PokemonCard from "./PokemonCard";

interface PokemonsProps {}

const Pokemons: React.FC<PokemonsProps> = () => {
    return (
        <div className="w-full min-h-screen border pokemons_bg">
            <div className="w-11/12 mx-auto">
                {/* logo  */}
                <div className="flex justify-center mt-8">
                    <Image src={logo} alt="Pokemon" />
                </div>

                {/* pokemon card  */}
                <div className="flex flex-wrap gap-10 justify-center mt-28 mb-12">
                    <PokemonCard />
                    <PokemonCard />
                    <PokemonCard />
                    <PokemonCard />
                    <PokemonCard />
                    <PokemonCard />
                </div>
            </div>
        </div>
    );
};

export default Pokemons;
