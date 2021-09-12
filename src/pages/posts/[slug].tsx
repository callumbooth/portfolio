import React from "react";
import { useGetProjectBySlug, useGetProjects } from "@/generated/queries";
import { GetProjectBySlug } from "@/generated/operations";
import RichText from "@/root/components/atoms/RichText";
import { Stage } from "@/root/types/generated/schemas";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import Project from "@/root/components/templates/project";

interface IPostParams extends ParsedUrlQuery {
  slug: string;
}

export default function Post({
  preview,
  body,
  ...rest
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { __typename, ...project } = rest;
  return (
    <Project project={project}>
      <RichText content={body.raw} />
    </Project>
  );
}

export const getStaticProps: GetStaticProps<
  GetProjectBySlug["project"] & { preview: boolean },
  IPostParams
> = async ({ params, preview = false }) => {
  const data = await useGetProjectBySlug.fetcher({
    slug: params.slug,
    draft: preview ? Stage.Draft : Stage.Published
  })();

  if (!data.project) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      preview,
      ...data.project
    }
  };
};

export const getStaticPaths: GetStaticPaths<IPostParams> = async () => {
  const data = await useGetProjects.fetcher()();

  return {
    paths: data.projects.map((project) => ({
      params: {
        slug: project.slug
      }
    })),
    fallback: false
  };
};
