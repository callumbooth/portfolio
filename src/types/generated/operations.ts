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
    skills: Array<Types.Skills>;
    launchDate?: Types.Maybe<any>;
    body: { __typename?: "RichText"; raw: any };
  }>;
};
