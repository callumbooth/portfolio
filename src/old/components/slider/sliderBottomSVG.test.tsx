import React from 'react';

import { render } from '@testing-library/react';

import SliderBottomSVG from './sliderBottomSVG';

fit('Svg rotates to 45 deg correctly', () => {
    const { container } = render(<SliderBottomSVG rotation={45} show />);

    expect(container).toMatchSnapshot();
});

it('Svg rotates by 90 deg correctly', () => {
    const { container } = render(<SliderBottomSVG rotation={90} show />);

    expect(container).toMatchSnapshot();
});
