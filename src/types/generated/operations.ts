import * as Types from "./schemas";

export type GetProjectByTitleQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type GetProjectByTitleQuery = {
  __typename?: "Query";
  project?: Types.Maybe<{ __typename?: "Project"; title: string }>;
};

export type PostBySlugQueryVariables = Types.Exact<{
  slug: Types.Scalars["String"];
  stage: Types.Stage;
}>;

export type PostBySlugQuery = {
  __typename?: "Query";
  post?: Types.Maybe<{
    __typename?: "Post";
    title: string;
    slug: string;
    date: any;
    content: { __typename?: "RichText"; html: string };
    ogImage?: Types.Maybe<{ __typename?: "Asset"; url: string }>;
    coverImage?: Types.Maybe<{ __typename?: "Asset"; url: string }>;
    author?: Types.Maybe<{
      __typename?: "Author";
      name: string;
      picture?: Types.Maybe<{ __typename?: "Asset"; url: string }>;
    }>;
  }>;
  morePosts: Array<{
    __typename?: "Post";
    title: string;
    slug: string;
    excerpt?: Types.Maybe<string>;
    date: any;
    coverImage?: Types.Maybe<{ __typename?: "Asset"; url: string }>;
    author?: Types.Maybe<{
      __typename?: "Author";
      name: string;
      picture?: Types.Maybe<{ __typename?: "Asset"; url: string }>;
    }>;
  }>;
};
