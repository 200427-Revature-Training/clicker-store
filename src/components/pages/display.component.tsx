import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { PokemonCardComponent } from './pokemon-card.component';
import { IState } from '../../reducers';
import { connect } from 'react-redux';
import { Pokemon } from '../../models/Pokemon';

interface DisplayComponentProps {
    pokemon: Pokemon[]
}

export const DisplayComponent: React.FC<DisplayComponentProps> = ({pokemon}) => {

    return (
        <section>
            <Typography variant="h2" component="h2">Pokedex</Typography>

            <Grid container direction="row" spacing={9} alignItems="flex-start">

                {pokemon.map(p => { return (
                    <Grid item xl={3} sm={3}>
                        <PokemonCardComponent pokeName={p.name} pokeImg={p.img} />
                    </Grid>
                )})}

            </Grid>
        </section>
    )
}

const mapStateToProps = (state: IState) => {
    return {
        pokemon: state.pokemonStoreState.collectedPokemon
    }
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayComponent);