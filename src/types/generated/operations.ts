import * as Types from "./schemas";

export type GetProjectBySlugVariables = Types.Exact<{
  slug: Types.Scalars["String"];
  draft: Types.Stage;
}>;

export type GetProjectBySlug = {
  __typename?: "Query";
  project?: Types.Maybe<{
    __typename?: "Project";
    id: string;
    title: string;
    slug: string;
    githubRepo?: Types.Maybe<string>;
    rotation?: Types.Maybe<number>;
    skills: Array<Types.Skills>;
    launchDate?: Types.Maybe<any>;
    body: { __typename?: "RichText"; raw: any };
  }>;
};

export type GetProjectsVariables = Types.Exact<{ [key: string]: never }>;

export type GetProjects = {
  __typename?: "Query";
  projects: Array<{ __typename?: "Project"; slug: string }>;
};
