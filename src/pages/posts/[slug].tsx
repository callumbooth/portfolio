import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import {
  getProjectBySlug,
  useGetProjectBySlugQuery
} from "@/root/hooks/useProjects";
import RichText from "@/root/components/atoms/RichText";

export default function Post({ title, body, preview }) {
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

export async function getStaticProps({ params, preview = false }) {
  const data = await getProjectBySlug("super-theme", preview);

  return {
    props: {
      preview,
      title: data.project.title,
      body: data.project.body.raw
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "super-theme" } }],
    fallback: true
  };
}
