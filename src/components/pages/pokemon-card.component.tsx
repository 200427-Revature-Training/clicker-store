import React from 'react';
import { Typography, Button, Card, CardActionArea, CardMedia, CardContent, CardActions, makeStyles, Icon } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minWidth: 200,
        minHeight: 200
    },
    media: {
        height: 140,
    },
});

interface PokemonCardProps {
    pokeName?: string;
    pokeImg?: string;
}

export const PokemonCardComponent: React.FC<PokemonCardProps> = ({pokeName, pokeImg}) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                {pokeName ? <CardMedia
                    className={classes.media}
                    image={pokeImg}
                    title={pokeName}
                /> : <Icon className={classes.media}><LockOutlinedIcon fontSize="large" /></Icon> }
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {pokeName ? pokeName : "????"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}