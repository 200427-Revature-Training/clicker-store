import { ClickerActionPayload, clickerActionTypes } from '../../actions/clicker.actions';
import { Action } from 'redux';
import { clickerReducer } from '../../reducers/clicker.reducer';

describe('clicker.reducer', () => {
    describe('ADD_CLICKS', () => {
        test('should increment state clicks by clicks in payload', () => {
            const action: ClickerActionPayload & Action = {
                type: clickerActionTypes.ADD_CLICKS,
                payload: {
                    clicks: 1
                }
            }

            const state = {
                clicks: 0
            }

            const nextState = clickerReducer(state, action);
            expect(nextState.clicks).toEqual(1);
        });

        test('should increase state clicks by 5 when 5 in payload', () => {
            const action: ClickerActionPayload & Action = {
                type: clickerActionTypes.ADD_CLICKS,
                payload: {
                    clicks: 5
                }
            }

            const state = {
                clicks: 10
            }

            const nextState = clickerReducer(state, action);
            expect(nextState.clicks).toEqual(15);
        });
    })

    describe('SPEND_CLICKS', () => {
        test('should reduce state clicks by value in payload', () => {
            const action: ClickerActionPayload & Action = {
                type: clickerActionTypes.SPEND_CLICKS,
                payload: {
                    clicks: 1
                }
            }

            const state = {
                clicks: 1
            }

            const nextState = clickerReducer(state, action);
            expect(nextState.clicks).toEqual(0);

        });

        test('Should reduce state clicks by 25 when 25 in payload', () => {
            const action: ClickerActionPayload & Action = {
                type: clickerActionTypes.SPEND_CLICKS,
                payload: {
                    clicks: 25
                }
            }

            const state = {
                clicks: 100
            }

            const nextState = clickerReducer(state, action);
            expect(nextState.clicks).toEqual(75);
        })
    });

    test('should return same state when no matching action', () => {
        const action: ClickerActionPayload & Action = {
            type: 'dfladjflkdshfds',
            payload: {
                clicks: 25
            }
        }

        const state = {
            clicks: 100
        }

        const nextState = clickerReducer(state, action);
        expect(nextState).toEqual(state);
    });


});