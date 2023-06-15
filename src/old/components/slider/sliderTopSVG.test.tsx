import React from "react";
import { render } from "@testing-library/react";
import SliderTopSVG from "./sliderTopSVG";

it("Svg rotates to 45 deg correctly", () => {
  const { container } = render(<SliderTopSVG rotation={45} />);

  expect(container).toMatchSnapshot();
});

it("Svg rotates by 90 deg correctly", () => {
  const { container } = render(<SliderTopSVG rotation={90} />);

  expect(container).toMatchSnapshot();
});
