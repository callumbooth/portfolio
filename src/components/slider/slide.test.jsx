import React from "react";
import renderer from "react-test-renderer";
import Slide from "./slide";
import { MemoryRouter } from "react-router-dom";

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

  const component = renderer.create(
    <MemoryRouter>
      <Slide
        delayTransition={() => {}}
        loaded={true}
        data={data}
        toggleInfo={() => {}}
        currentSlide={1}
      />
    </MemoryRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
