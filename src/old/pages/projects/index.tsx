import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

import ProjectCard from "@/components/projectcard";
import Link from "@/components/atoms/Link";
import clsx from "clsx";
import { useGetProjects } from "@/root/types/generated/queries";
import { GetProjects } from "@/root/types/generated/operations";
import { Skills } from "@/root/types/generated/schemas";
import mapGCMSEnum from "@/root/utils/mapGCMSEnum";
import Head from "next/head";

const validTags = ["PHP", "React", "Moodle", "Design"];

const Project = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const tags = props.projects.reduce<{ label: string; key: Skills }[]>(
    (prev, current) => [
      ...prev,
      ...current.skills
        .filter(
          (skill) =>
            validTags.includes(skill) && !prev.find((i) => i.key === skill)
        )
        .map((skill) => ({ label: mapGCMSEnum(skill), key: skill }))
    ],
    []
  );

  return (
    <div id="projects" className="p-10 lg:p-20 xl:p-36">
      <Head>
        <title>My projects - Callum Booth | Software Engineer</title>
      </Head>
      <div className="w-full">
        <div className="w-full">
          <div className="flex flex-wrap -mx-1">
            <Link href="/projects">
              <a className="btn btn-red">All</a>
            </Link>
            {tags.map((tag) => (
              <Link
                key={tag.key}
                href={{ pathname: "/projects", query: { tag: tag.key } }}
              >
                <a
                  className={clsx(
                    "btn",
                    router.query.tag === tag.key
                      ? "btn-red bg-primary-900"
                      : "btn-white"
                  )}
                >
                  {tag.label}
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
