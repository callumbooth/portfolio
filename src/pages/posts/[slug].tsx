import { useRouter } from "next/router";
import ErrorPage from "next/error";
import {
  getProjectByTitle,
  useGetProjectByTitleQuery
} from "@/root/hooks/useProjects";

export default function Post({ title, preview }) {
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
      </article>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getProjectByTitle("cknkaa4pscx6p0d125rog1306", preview);

  return {
    props: {
      preview,
      title: data.project.title
    }
  };
}

export async function getStaticPaths() {
  console.log("here2");
  return {
    paths: [{ params: { slug: "super-theme" } }],
    fallback: true
  };
}
