import React from 'react';
import { Button, Typography } from '@material-ui/core';
import "./clicker.component.css";

export const ClickerComponent: React.FC = () => {
    return <section>
        <Typography variant="h1" component="h2" gutterBottom>0</Typography>
        <Button size="large" variant="contained" color="secondary">
            Click Me!
        </Button>
    </section>
}