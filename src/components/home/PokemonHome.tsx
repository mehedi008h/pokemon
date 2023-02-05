import React, { FC, Fragment } from "react";
import Description from "./Description";
import Pokemons from "./Pokemons";

interface HomeProps {}

const PokemonHome: FC<HomeProps> = (props) => {
    return (
        <Fragment>
            <Pokemons />
            <Description />
        </Fragment>
    );
};

export default PokemonHome;
