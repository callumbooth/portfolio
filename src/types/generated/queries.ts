import * as Types from "./operations";

import { useQuery, UseQueryOptions } from "react-query";
import { fetcher } from "@/root/configuration/fetcher";

export const GetProjectBySlugDocument = `
    query getProjectBySlug($slug: String!, $draft: Stage!) {
  project(where: {slug: $slug}, stage: $draft) {
    id
    title
    slug
    githubRepo
    rotation
    skills
    launchDate
    body {
      raw
    }
  }
}
    `;
export const useGetProjectBySlug = <
  TData = Types.GetProjectBySlug,
  TError = unknown
>(
  variables: Types.GetProjectBySlugVariables,
  options?: UseQueryOptions<Types.GetProjectBySlug, TError, TData>
) =>
  useQuery<Types.GetProjectBySlug, TError, TData>(
    ["getProjectBySlug", variables],
    fetcher<Types.GetProjectBySlug, Types.GetProjectBySlugVariables>(
      GetProjectBySlugDocument,
      variables
    ),
    options
  );
useGetProjectBySlug.fetcher = (variables: Types.GetProjectBySlugVariables) =>
  fetcher<Types.GetProjectBySlug, Types.GetProjectBySlugVariables>(
    GetProjectBySlugDocument,
    variables
  );
export const GetProjectsDocument = `
    query getProjects {
  projects {
    slug
  }
}
    `;
export const useGetProjects = <TData = Types.GetProjects, TError = unknown>(
  variables?: Types.GetProjectsVariables,
  options?: UseQueryOptions<Types.GetProjects, TError, TData>
) =>
  useQuery<Types.GetProjects, TError, TData>(
    ["getProjects", variables],
    fetcher<Types.GetProjects, Types.GetProjectsVariables>(
      GetProjectsDocument,
      variables
    ),
    options
  );
useGetProjects.fetcher = (variables?: Types.GetProjectsVariables) =>
  fetcher<Types.GetProjects, Types.GetProjectsVariables>(
    GetProjectsDocument,
    variables
  );
