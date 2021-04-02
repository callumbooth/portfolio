import Project from "@/components/templates/project";
import React from "react";
import LazyLoad from "@/components/lazy-load";
import data from "@/root/data.json";
import { GetStaticProps } from "next";

const ContentBuilder = (props) => {
  return (
    <Project project={props.project}>
      <section className="py-5">
        <h4>Overview</h4>
        <p>
          Moodle’s UX for creating content leaves much to be desired and the
          skill floor for creating beautiful and engaging courses is much higher
          than it should be. In comes a solution which is very familiar in other
          platforms **cough** WordPress **cough** and whilst slated by
          professionals, it does the job, and does it well, if done correctly.
          The drag and drop page builder.
        </p>
        <p>
          This Moodle plugin allows a Moodle user to build a layout and
          incorporate content with the simple drag and drop functionality we are
          all used to. It uses React’s shadow DOM with the context api as state
          management, this combined with react-beautiful-dnd made by Atlassian,
          make for a powerful combo.
        </p>
        <p>
          Moodle uses AMD modules so this project required incorporating each
          component into the AMD system to allow the files to be integrated
          succinctly.
        </p>
      </section>
      <section className="py-5">
        <h5>How it works</h5>
        <p>In a few simple steps we can build up a layout.</p>
        <h6>Step 1 - Column selector</h6>
        <p>
          Each section needs a number of columns, this was the initial list of
          options I started with but it can be expanded on very easily
        </p>
        <figure className="mb-3">
          <LazyLoad height={250}>
            <img src="/content-builder/ss2.jpg" alt="settings-page" />
          </LazyLoad>
        </figure>

        <h6>Step 2 - Content selection</h6>
        <p>
          Each column can have any number of content elements. Whilst we only
          have two options currently, I used the subplugin approach so that as
          new/old elements are added or removed any Moodle instance can be
          updated independantly of the main plugin.
        </p>
        <p>
          Once the content type has been selected the user is then prompted to
          enter the desired content, in a format that is relavant to the content
          type.
        </p>
        <figure className="mb-3">
          <LazyLoad height={150}>
            <img src="/content-builder/ss3.jpg" alt="settings-page" />
          </LazyLoad>
        </figure>

        <h6>Step 3 - Content review</h6>
        <p>
          Now that we have added some content we can clearly see how it will
          look on the page. Whilst the specifics of the rendering isnt show, it
          gives the Moodle user a good high level overview.
        </p>
        <figure className="mb-3">
          <LazyLoad height={400}>
            <img src="/content-builder/ss1.jpg" alt="settings-page" />
          </LazyLoad>
        </figure>

        <h6>Step 4 - Content adjustment</h6>
        <p>
          As with most things, at some point the content will need to change or
          be updated. There are a few ways to do this.
        </p>
        <p>
          If we need to add new content the aptly named 'new' buttons can be
          used. Or if the content needs to be changed the cog icons will allow
          the user to edit the element.
        </p>
        <p>
          If however the content needs to move we can click and drag on the move
          icons to reorder the elements.
        </p>
        <figure className="mb-3">
          <LazyLoad height={400}>
            <img src="/content-builder/ss4-1.jpg" alt="settings-page" />
          </LazyLoad>
        </figure>
        <figure className="mb-3">
          <LazyLoad height={400}>
            <img src="/content-builder/ss4-2.jpg" alt="settings-page" />
          </LazyLoad>
        </figure>
      </section>
    </Project>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      project: data.projects.find(
        (project) => project.slug === "content-builder"
      ),
    },
  };
};

export default ContentBuilder;
