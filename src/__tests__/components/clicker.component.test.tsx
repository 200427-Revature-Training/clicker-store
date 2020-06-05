import React from 'react';
import { ClickerComponent, ClickerComponentProps } from '../../components/pages/clicker.component';
import { mount } from 'enzyme';


describe('clicker.component', () => {
    
    test('should render', () => {
        const props: ClickerComponentProps = {
            clicks: 30,
            addClicks: () => {}
        }
        const wrapper = mount(<ClickerComponent {...props} />);
        expect(wrapper).toBeDefined();
    })
    
    test('should render clicks prop in h2 ', () => {
        const props: ClickerComponentProps = {
            clicks: 30,
            addClicks: () => {}
        }
        const wrapper = mount(<ClickerComponent {...props} />)
        
        // Debug can be used to create a pretty-printed DOM
        // structure string to help debug tests
        // console.log(wrapper.debug());
        const header = wrapper.find('h2');
        expect(header.text()).toContain(''+props.clicks);
    });

    test('should call addClicks when button clicked', () => {
        const props: ClickerComponentProps = {
            clicks: 30,
            addClicks: jest.fn()
        }

        const wrapper = mount(<ClickerComponent {...props} />);

        const button = wrapper.find('button');

        // Simulate is called to simulate some DOM event
        // A second parameter can be provided optionally to
        // provide an event object
        button.simulate('click');

        expect(props.addClicks).toBeCalled();

    });




})