import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            count
            next
            previous
            status
            message
            results {
                id
                url
                name
                image
            }
        }
    }
`;

export const GET_POKEMON = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            height
            weight
            abilities {
                ability {
                    name
                }
            }
            stats {
                base_stat
                stat {
                    name
                }
            }
            types {
                type {
                    name
                }
            }
        }
    }
`;
