import React from "react";
import { render } from "@testing-library/react";
import Slide from "./slide";

it("Slide renders correctly", () => {
  const data = {
    name: "Super theme",
    slug: "super-theme",
    rotate: 0,
    featured: true,
    tags: ["tag", "tag2", "tag3"],
    launched: "September 2018",
    summary: "A Moodle theme to end all Moodle themes",
    content: "content goes here",
  };

  const component = render(
    <Slide
      delayTransition={() => {}}
      loaded={true}
      data={data}
      toggleInfo={() => {}}
      currentSlide={1}
    />
  );

  expect(component.container).toMatchSnapshot();
});
