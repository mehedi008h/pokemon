import { logo } from "@/assets";
import { GET_POKEMONS } from "@/graphql/pokemon";
import { useQuery } from "@apollo/client/react";
import Image from "next/image";
import React, { Fragment } from "react";
import PokemonCard from "./PokemonCard";

interface Pokemon {
    image: string;
    name: string;
    url: string;
}

const gqlVariables = {
    limit: 10,
    offset: 1,
};

const Pokemons = () => {
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: gqlVariables,
    });

    console.log("Data : ", data?.pokemons?.results);

    return (
        <div className="w-full min-h-screen border pokemons_bg">
            <div className="w-11/12 mx-auto">
                {/* logo  */}
                <div className="flex justify-center mt-8">
                    <Image src={logo} alt="Pokemon" />
                </div>

                {/* pokemon card  */}
                <div className="flex flex-wrap gap-10 justify-center mt-28 mb-12">
                    {loading ? (
                        <h1>Loading</h1>
                    ) : (
                        <Fragment>
                            {data?.pokemons?.results.map(
                                (pokemon: Pokemon, i: number) => (
                                    <PokemonCard pokemon={pokemon} key={i} />
                                )
                            )}
                        </Fragment>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Pokemons;
