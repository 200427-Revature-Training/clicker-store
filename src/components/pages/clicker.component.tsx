import React from 'react';
import { Button, Typography } from '@material-ui/core';
import "./clicker.component.css";
import { IState } from '../../reducers';
import { addClicks } from '../../actions/clicker.actions';
import { connect } from 'react-redux';

export interface ClickerComponentProps {
    clicks: number;
    addClicks: (clicks: number) => void;
}

export const ClickerComponent: React.FC<ClickerComponentProps> = ({clicks, addClicks}) => {

    const handleClick = () => {
        addClicks(1);
    }

    return <section>
        <Typography variant="h1" component="h2" gutterBottom>{clicks}</Typography>
        <Button size="large" variant="contained" color="secondary" onClick={() => handleClick()}>
            Click Me!
        </Button>
    </section>
}

// This will map a state value to a property that this component will get access to
// Functionally the 'clicks' prop will reflect the state of the clickerState.clicks
const mapStateToProps = (state: IState) => {
    return {
        clicks: state.clickerState.clicks
    }
}

// This will map actions defined in action files to props that can be used by this component
const mapDispatchToProps = {
    addClicks
}


// connect will connect the component to the store, suppling all requested props
export default connect(mapStateToProps, mapDispatchToProps)(ClickerComponent);
