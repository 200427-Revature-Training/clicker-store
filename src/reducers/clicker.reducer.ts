import { ClickerState } from '.';
import { ClickerActionPayload, clickerActionTypes } from '../actions/clicker.actions';
import { Action } from 'redux';

const initialState: ClickerState = {
    clicks: 0
}

export const clickerReducer = (state: ClickerState = initialState, 
                                action: ClickerActionPayload & Action) => {
    switch(action.type) {
        case clickerActionTypes.ADD_CLICKS: {
            return {
                ...state,
                clicks: state.clicks + action.payload.clicks
            }
        }
        case clickerActionTypes.SPEND_CLICKS: {
            return {
                ...state,
                clicks: state.clicks - action.payload.clicks
            }
        }
        default: return state;
    }

}