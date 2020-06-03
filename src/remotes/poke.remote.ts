import Axios from 'axios';
import { Pokemon } from '../models/Pokemon';

interface PokeAPIPokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    }
}

export const getPokemon = async (id: number) => {
    const response = await Axios.get<PokeAPIPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon: Pokemon = {
        id: response.data.id,
        name: response.data.name,
        img: response.data.sprites.front_default
    }
    return pokemon;
}