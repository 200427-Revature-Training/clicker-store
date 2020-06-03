import { Pokemon } from '../models/Pokemon';
import { combineReducers } from 'redux';
import { clickerReducer } from './clicker.reducer';
import { pokemonReducer } from './pokemon.reducer';

export interface IState {
    clickerState: ClickerState;
    pokemonStoreState: PokemonStoreState;
}

export interface ClickerState {
    clicks: number;
}

export interface PokemonStoreState {
    lastPurchase: Pokemon | undefined;
    collectedPokemon: Pokemon[];
}

export const state = combineReducers({
    clickerState: clickerReducer,
    pokemonStoreState: pokemonReducer
})