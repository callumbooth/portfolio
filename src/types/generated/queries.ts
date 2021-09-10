import * as Types from "./operations";

import { useQuery, UseQueryOptions } from "react-query";
import { fetcher } from "@/root/configuration/fetcher";

export const GetProjectBySlugDocument = `
    query getProjectBySlug($slug: String!, $draft: Stage!) {
  project(where: {slug: $slug}, stage: $draft) {
    id
    title
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
