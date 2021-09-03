import * as Types from "./schemas";

export type GetProjectByTitleQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type GetProjectByTitleQuery = { __typename?: "Query" } & {
  project?: Types.Maybe<
    { __typename?: "Project" } & Pick<Types.Project, "title">
  >;
};
