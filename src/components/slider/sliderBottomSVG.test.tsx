import React from "react";
import { render } from "@testing-library/react";
import SliderBottomSVG from "./sliderBottomSVG";

it("Svg rotates to 45 deg correctly", () => {
  const { container } = render(<SliderBottomSVG rotation={45} />);

  expect(container).toMatchSnapshot();
});

it("Svg rotates by 90 deg correctly", () => {
  const { container } = render(<SliderBottomSVG rotation={90} />);

  expect(container).toMatchSnapshot();
});
