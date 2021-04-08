import {
  getClient,
  overlayDrafts,
  sanityClient,
} from "@/root/configuration/sanity.server";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

const Post = (props) => {
  return (
    <div>
      <div>some content</div>
    </div>
  );
};

const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(postSlugsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

const postFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`;

const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) | [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) | [0...2] {
    content,
    ${postFields}
  }
}`;

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
      },
    },
  };
};

export default Post;
