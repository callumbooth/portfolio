import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

import ProjectCard from "@/components/projectcard";
import Link from "@/components/atoms/Link";
import clsx from "clsx";
import { useGetProjects } from "@/root/types/generated/queries";
import { GetProjects } from "@/root/types/generated/operations";
import { Skills } from "@/root/types/generated/schemas";

const validTags = ["PHP", "React", "Moodle", "Design"];

const Project = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const tags = props.projects.map((project) =>
    project.skills.filter((skill) => validTags.includes(skill))
  );

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
            if (
              router.query.tag &&
              project.skills.includes(
                Array.isArray(router.query.tag)
                  ? (router.query.tag[0] as unknown as Skills)
                  : (router.query.tag as unknown as Skills)
              )
            ) {
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

export const getStaticProps: GetStaticProps<GetProjects> = async () => {
  const data = await useGetProjects.fetcher()();

  return {
    props: {
      projects: data.projects
    }
  };
};

export default Project;
