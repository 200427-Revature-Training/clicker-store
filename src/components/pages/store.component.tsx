import React, { useState } from 'react';
import "./store.component.css";
import { Typography, Button } from '@material-ui/core';
import { PokemonCardComponent } from './pokemon-card.component';
import { IState } from '../../reducers';
import { spendClicks } from '../../actions/clicker.actions';
import { buyPokemon } from '../../actions/pokemon.actions';
import { connect } from 'react-redux';
import { Pokemon } from '../../models/Pokemon';
import { getPokemon } from '../../remotes/poke.remote';

interface StoreComponentProps {
    clicks: number;
    pokemon: Pokemon | undefined;
    spendClicks: (clicks: number) => void;
    buyPokemon: (pokemon: Pokemon) => void;
}

export const StoreComponent: React.FC<StoreComponentProps> = (props) => {
    const {pokemon} = props;
    const [purchasePending, setPurchasePending] = useState(false);

    const buyPokemon = async () => {
        setPurchasePending(true)
        props.spendClicks(25);
        const randomId: number = Math.floor(Math.random()*806)+1;
        const pokemon = await getPokemon(randomId);
        props.buyPokemon(pokemon);
        setPurchasePending(false);
    }

    return <div id="flex-container">
        <header>
            <Typography variant="h2" component="h2">Store</Typography>

        </header>
        <section>

            <PokemonCardComponent 
                pokeName={pokemon ? pokemon.name : undefined} 
                pokeImg={pokemon ? pokemon.img : undefined } />


            <Button color="primary" size="large" variant="contained"
                disabled={props.clicks < 25 || purchasePending} onClick={buyPokemon}
            >Buy Pokemon</Button>

        </section>
    </div>
}

const mapStateToProps = (state: IState) => {
    return {
        clicks: state.clickerState.clicks,
        pokemon: state.pokemonStoreState.lastPurchase
    }
}

const mapDispatchToProps = {
    spendClicks,
    buyPokemon
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreComponent);

