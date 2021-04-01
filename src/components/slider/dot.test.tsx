import React from "react";
import renderer from "react-test-renderer";
import Dot from "./dot";

it("Dot displays when inactive", () => {
  const component = renderer.create(
    <Dot active={false} count={0} onClick={() => {}} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("Dot displays when active", () => {
  const component = renderer.create(
    <Dot active={true} count={0} onClick={() => {}} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
