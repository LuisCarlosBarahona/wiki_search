import Input from '.';
import {render} from '@testing-library/react'

describe('Input Component', () => {
    let sut;
    let props;

    it('should match snapshot', () => {
        sut = render(<Input {...props}/>);
        expect(sut).toMatchSnapshot();
    });
});