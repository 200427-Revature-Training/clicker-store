import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { PokemonCardComponent } from './pokemon-card.component';

export const DisplayComponent: React.FC = () => {
    
    const data = [undefined, undefined];
    const iterations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <section>
            <Typography variant="h2" component="h2">Pokedex</Typography>

            <Grid container direction="row" spacing={9} alignItems="flex-start">

                {iterations.map(i => { return (
                    <Grid item xl={3} sm={3}>
                        <PokemonCardComponent pokeName={data[0]} pokeImg={data[1]} />
                    </Grid>
                )})}

            </Grid>
        </section>
    )
}