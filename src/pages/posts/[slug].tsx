import { useRouter } from "next/router";
import ErrorPage from "next/error";
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
} from "@/root/configuration/graphCMS";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <article>
        <div>
          <h1>{post.title}</h1>
        </div>
      </article>

      {morePosts.length > 0 && "there are more posts"}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data.post,
      morePosts: data.morePosts || [],
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPostsWithSlug();
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  };
}
