import React from "react";
import { screen, render } from "@testing-library/react";
import Dot from "./dot";

describe("Dot", () => {
  it("Dot displays when inactive", () => {
    const component = render(
      <Dot active={false} count={0} handleClick={() => {}} />
    );

    expect(component.container).toMatchSnapshot();
  });

  it("Dot displays when active", () => {
    render(<Dot active={true} count={1} handleClick={() => {}} />);

    expect(screen.getByLabelText("dot-1")).toBeTruthy();
  });
});
