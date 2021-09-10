import * as Types from "./schemas";

export type GetProjectBySlugQueryVariables = Types.Exact<{
  slug?: Types.Maybe<Types.Scalars["String"]>;
}>;

export type GetProjectBySlugQuery = {
  __typename?: "Query";
  project?: Types.Maybe<{
    __typename?: "Project";
    id: string;
    title: string;
    skills: Array<Types.Skills>;
    launchDate?: Types.Maybe<any>;
    body: { __typename?: "RichText"; raw: any };
  }>;
};
