import React from 'react';
import {shallow} from "enzyme";
import {GreetApp} from "./GreetApp";

describe('testing GreetApp', () => {
    test('Must to show Hello {name}', () => {

        const name = 'Aldray';

        const wrapper = shallow(<GreetApp name={name}/>);
        const greet = wrapper.find('p').text();
        expect(greet).toEqual(`Hello, ${name}!`);
    });
});
