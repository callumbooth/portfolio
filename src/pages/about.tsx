import { motion } from "framer-motion";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import { useAboutPage } from "@/generated/queries";
import differenceInYears from "date-fns/differenceInYears";

import JobList from "../components/job-list";
import { AboutPage } from "../types/generated/operations";
import RichText from "../components/atoms/RichText";

const fadeIn = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
};

const About = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div id="about">
      <div className="pr-12">
        <div className="bg-white bg-opacity-80 pt-32 px-12 pb-12">
          <div className="about-me">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.6 }}
            >
              <h2>{props.page.title}</h2>
            </motion.div>
            <motion.div
              className="attributes"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.7 }}
            >
              <p>
                <span className="text-primary-main">Age:</span>
                <span className="font-bold">
                  &nbsp;
                  {differenceInYears(new Date(props.person.dob), new Date())}
                </span>
              </p>
              <p>
                <span className="text-primary-main">Location:</span>
                <span className="font-bold">&nbsp;{props.person.location}</span>
              </p>
              <p>
                <span className="text-primary-main">Skills:</span>
                <span className="font-bold">
                  &nbsp;{" "}
                  {props.person.skills.map(
                    (skill, i) =>
                      `${skill} ${
                        i !== props.person.skills.length - 1 ? ". " : ""
                      }`
                  )}
                </span>
              </p>
            </motion.div>
            <motion.div
              className="flex flex-wrap -mx-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.9 }}
            >
              <div className="desc flex-1 px-8">
                <RichText content={props.page.body.json} />
              </div>
              <div className="job-history flex-1 px-8">
                <h3>Previous experience</h3>
                <div className="pt-5">
                  {props.employmentData.map((job, i) => {
                    return <JobList key={i} data={job} />;
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  page: AboutPage["page"];
  employmentData: AboutPage["employments"];
  person: AboutPage["person"];
}> = async () => {
  const data = await useAboutPage.fetcher()();
  const employmentData = data.employments.sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.valueOf() - dateA.valueOf();
  });

  return {
    props: {
      page: data.page,
      employmentData,
      person: data.person
    }
  };
};

export default About;
