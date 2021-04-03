import React from "react";
import { ComponentType } from "react";
import dynamic from "next/dynamic";
import randomName from "random-name";
import Project from "@/root/components/templates/project";

import data from "@/root/data.json";
import { GetStaticProps } from "next";

const Teaflip = dynamic(() => import("teaflip"), {
  ssr: false,
}) as ComponentType<{ people: any[] }>;


const TeaflipProject = (props) => {
  return (
    <Project project={props.project}>
      <h4>Overview</h4>
      <p>
        I believe development is a team effort, it doesn't matter if you working
        on a solo project or building an enterprise application. It's likely
        you're working with something that someone helped make, be that your
        Hardware, IDE or another react component.
      </p>
      <p>
        Part of that teamwork is morale, and in the UK the main source of
        boosting morale is with caffine, in 2 main sources, tea and coffee. When
        making our favourite concoction its good etiquette to also offer your
        fellow colleagues a drink. But some people are better at this than
        others. Sometimes people just need a little nudge to motivate them into
        the team spirit.
      </p>
      <p>
        That's the purpose of Teaflip, to provide a nudge with the level of
        passive aggressiveness that only a computer can deliver. It tracks the
        number of cups each person has drank and the number of rounds of drinks
        they have made. The system adds weight to each person inversely
        proportional to difference between the two, making it more likely for
        someone who has drank a lot of cups but hasn't made many rounds to be
        chosen.
      </p>
      <h3>Demo</h3>
      <Teaflip people={props.people} />
    </Project>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const people = [];

  const getRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  for (let i = 0; i <= 5; i++) {
    const cupsdrank = getRandomNumber(10, 0);
    const roundsmade = getRandomNumber(cupsdrank, 0);
    const person = {
      id: i,
      name: randomName(),
      cupsdrank: cupsdrank,
      roundsmade: roundsmade,
    };

    people.push(person);
  }

  return {
    props: {
      project: data.projects.find((project) => project.slug === "teaflip"),
      people,
    },
  };
};

export default TeaflipProject;
