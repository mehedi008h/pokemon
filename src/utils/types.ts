export interface PokemonData {
    pokemon: {
        id: number;
        name: string;
        height: number;
        weight: number;
        abilities: [
            {
                ability: {
                    name: string;
                };
            }
        ];
        stats: [
            {
                base_stat: number;
                stat: {
                    name: string;
                };
            }
        ];
        types: [
            {
                type: {
                    name: string;
                };
            }
        ];
    };
}

export interface PokemonVariables {
    name: string | undefined;
}
