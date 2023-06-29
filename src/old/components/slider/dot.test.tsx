import React from 'react';

import { render, screen } from '@testing-library/react';

import Dot from './dot';

describe('Dot', () => {
    it('Dot displays when inactive', () => {
        const component = render(
            <Dot active={false} count={0} handleClick={jest.fn()} />,
        );

        expect(component.container).toMatchSnapshot();
    });

    it('Dot displays when active', () => {
        render(<Dot active={true} count={1} handleClick={jest.fn()} />);

        expect(screen.getByLabelText('dot-1')).toBeTruthy();
    });
});
