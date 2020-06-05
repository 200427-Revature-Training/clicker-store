import React from 'react';
import { StoreComponent, StoreComponentProps } from '../../components/pages/store.component';
import { mount } from 'enzyme';
import { getPokemon } from '../../remotes/poke.remote';
import { act, wait } from '@testing-library/react';

jest.mock('../../remotes/poke.remote')
const mockGetPokemon = getPokemon as any;

const commonProps: StoreComponentProps = {
    clicks: 0,
    pokemon: undefined,
    spendClicks: jest.fn(),
    buyPokemon: jest.fn()
}

describe('<StoreComponent />', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('should render', () => {
        const wrapper = mount(<StoreComponent {...commonProps} />);
        expect(wrapper).toBeDefined();
    });

    test('should be disabled when less than 25 clicks', () => {
        const props = { ...commonProps, clicks: 24 };
        const wrapper = mount(<StoreComponent {...props } />);
        const button = wrapper.find('#poke-buy-button').first();

        expect(button.prop('disabled')).toBeTruthy();
    })

    test('should be enabled with 25 clicks', () => {
        const props = { ...commonProps, clicks: 25 };
        const wrapper = mount(<StoreComponent {...props } />);
        const button = wrapper.find('#poke-buy-button').first();

        expect(button.prop('disabled')).toBeFalsy();
    });

    test('spendClicks should be called when the button is pressed', () => {
        const props = { ...commonProps, clicks: 25 };
        const wrapper = mount(<StoreComponent {...props } />);
        const button = wrapper.find('#poke-buy-button').first();
        button.simulate('click');

        expect(commonProps.spendClicks).toBeCalled();
    })

    test('clicking button should cause remote retrieve pokemon to be passed to buyPokemon', async () => {
        const pokemon = {
            id: 1,
            name: 'pokemon',
            img: 'some image'
        };
        mockGetPokemon.mockImplementation(() => pokemon);
        const props = { ...commonProps, clicks: 25 };
        const wrapper = mount(<StoreComponent {...props } />);
        const button = wrapper.find('#poke-buy-button').first();
        await act(async () => {
            button.simulate('click');
        }); 
        expect(commonProps.spendClicks).toBeCalled();
        expect(mockGetPokemon).toBeCalled();
        expect(commonProps.buyPokemon).toBeCalledWith(pokemon);
    })

});