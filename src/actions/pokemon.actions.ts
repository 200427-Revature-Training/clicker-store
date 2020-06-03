import { Pokemon } from '../models/Pokemon';
import { Dispatch } from 'react';
import { Action } from 'redux';

export const pokemonActionTypes = {
    BUY_POKEMON: 'BUY_POKEMON'
}

export interface PokemonActionPayload {
    payload: {
        pokemon: Pokemon
    }
}

export const buyPokemon = (pokemon: Pokemon) => (dispatch: Dispatch<PokemonActionPayload & Action>) => {
    dispatch({
        type: pokemonActionTypes.BUY_POKEMON,
        payload: {
            pokemon
        }
    });
}