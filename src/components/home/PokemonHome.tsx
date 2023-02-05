import React, { FC, Fragment } from "react";
import Pokemons from "./Pokemons";

interface HomeProps {}

const PokemonHome: FC<HomeProps> = (props) => {
    return (
        <Fragment>
            <Pokemons />
        </Fragment>
    );
};

export default PokemonHome;
