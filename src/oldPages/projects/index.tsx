import React from "react";

import ProjectCard from "@/components/projectcard";
import Link from "@/components/atoms/Link";

import data from "@/root/data.json";
import { useRouter } from "next/router";
import clsx from "clsx";

const validTags = ["PHP", "React", "Moodle", "Design"];

const Project = (props) => {
  const router = useRouter();

  const tags = [];
  props.projects.map((project) => {
    project.tags.map((tag) => {
      if (!tags.includes(tag) && validTags.indexOf(tag) !== -1) {
        tags.push(tag);
        return null;
      }
      return null;
    });
    return null;
  });

  return (
    <div id="projects" className="p-10 lg:p-20 xl:p-36">
      <div className="w-full">
        <div className="w-full">
          <div className="flex flex-wrap -mx-1">
            <Link href="/projects">
              <a className="btn btn-red">All</a>
            </Link>
            {tags.map((tag, i) => (
              <Link key={i} href={{ pathname: "/projects", query: { tag } }}>
                <a
                  className={clsx(
                    "btn",
                    router.query.tag === tag
                      ? "btn-red bg-primary-900"
                      : "btn-white"
                  )}
                >
                  {tag}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {props.projects.map((project, i) => {
            if (router.query.tag && project.tags.includes(router.query.tag)) {
              return <ProjectCard key={i} data={project} />;
            } else if (!router.query.tag) {
              return <ProjectCard key={i} data={project} />;
            }
            return "";
          })}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      projects: data.projects
    }
  };
};

export default Project;
