import React from 'react';
import {CounterApp} from "./CounterApp";
import {shallow} from "enzyme";

describe('testing CounterApp', () => {

    const defaultCounter = 100;

    let wrapper = shallow(<CounterApp defaultCounter={defaultCounter}/>);

    beforeEach(() => {
        wrapper = shallow(<CounterApp defaultCounter={defaultCounter}/>)
    });

    test('Must to show 5', () => {
        const result = wrapper.find('p').text().trim();
        // @ts-ignore
        expect(result).toBe(`${defaultCounter}`);
    });

    test('Must to increment +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const result = wrapper.find('p').text().trim();
        // @ts-ignore
        expect(result).toBe(`${defaultCounter + 1}`);
    });

    test('Must to decrement -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const result = wrapper.find('p').text().trim();
        // @ts-ignore
        expect(result).toBe(`${defaultCounter - 1}`);
    });

    test('Must reset counter', () => {
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const result = wrapper.find('p').text().trim();
        // @ts-ignore
        expect(result).toBe(`${defaultCounter}`);
    });
});
