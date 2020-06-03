import { PokemonStoreState } from '.';
import { PokemonActionPayload, pokemonActionTypes } from '../actions/pokemon.actions';
import { Action } from 'redux';

const initialState: PokemonStoreState = {
    collectedPokemon: [],
    lastPurchase: undefined
}

export const pokemonReducer = (state: PokemonStoreState = initialState,
    action: PokemonActionPayload & Action) => {

        switch(action.type) {
            case pokemonActionTypes.BUY_POKEMON: {
                let pokeArray = state.collectedPokemon;
                if (!state.collectedPokemon.some(p => 
                    p.id === action.payload.pokemon.id)) {
                        pokeArray = [...pokeArray, action.payload.pokemon]
                            .sort((a, b) => a.id - b.id);
                    }
                return {
                    ...state,
                    collectedPokemon: pokeArray,
                    lastPurchase: action.payload.pokemon
                }
            }
            default: {
                return state;
            }
        }
}