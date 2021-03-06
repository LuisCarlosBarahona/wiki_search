import React from 'react';
import Input from '.';
import {shallow} from 'enzyme'

const render = (props) => shallow(<Input {...props}/>)

describe('Input Component', () => {
    let sut;
    let props;

    describe('without props', () => {
        beforeEach(()=> {
            sut = render(props);
        });

        it('should match snapshot', () => {
            sut = render(<Input {...props}/>);
            expect(sut).toMatchSnapshot();
        });
    });

    describe('with props', () => {
        beforeEach(()=> {
            props = {
                placeholder: 'Input your data',
                name: 'search'
            };
            sut = render(props);
        });

        it('should match snapshot', () => {
            sut = render(<Input {...props}/>);
            expect(sut).toMatchSnapshot();
        });
    });

});