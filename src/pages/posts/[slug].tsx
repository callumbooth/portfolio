import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { useGetProjectBySlug } from "@/queries";
import RichText from "@/root/components/atoms/RichText";
import { Stage } from "@/root/types/generated/schemas";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";

interface IPostProps {
  preview: boolean;
  title: string;
  body: any;
}

interface IPostParams extends ParsedUrlQuery {
  slug: string;
}

export default function Post({
  title,
  body,
  preview
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (!router.isFallback && !title) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <article>
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <RichText content={body} />
        </div>
      </article>
    </>
  );
}

export const getStaticProps: GetStaticProps<IPostProps, IPostParams> = async ({
  params,
  preview = false
}) => {
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
      title: data.project.title,
      body: data.project.body.raw
    }
  };
};

export const getStaticPaths: GetStaticPaths<IPostParams> = async () => {
  return {
    paths: [{ params: { slug: "super-theme" } }],
    fallback: true
  };
};
