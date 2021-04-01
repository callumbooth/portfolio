import React from "react";
import renderer from "react-test-renderer";
import SliderBottomSVG from "./sliderBottomSVG";

it("Svg rotates to 45 deg correctly", () => {
  const component = renderer.create(<SliderBottomSVG rotation="45" />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("Svg rotates by 90 deg correctly", () => {
  const component = renderer.create(<SliderBottomSVG rotation="90" />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
