import React from "react";
import renderer from "react-test-renderer";
import SliderTopSVG from "./SliderTopSVG";

it("Svg rotates to 45 deg correctly", () => {
  const component = renderer.create(<SliderTopSVG rotation="45" />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("Svg rotates by 90 deg correctly", () => {
  const component = renderer.create(<SliderTopSVG rotation="90" />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
