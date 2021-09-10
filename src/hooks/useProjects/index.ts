import { fetcher } from "@/root/configuration/fetcher";
import { useQuery, UseQueryOptions } from "react-query";
import * as Operations from "../../types/generated/operations";

import gql from "graphql-tag";

import { print } from "graphql";

const query = print(gql`
  query getProjectBySlug($slug: String!) {
    project(where: { slug: $slug }) {
      id
      title
      skills
      launchDate
      body {
        raw
      }
    }
  }
`);

export const getProjectBySlug = async (slug: string, preview = false) => {
  return fetcher<
    Operations.GetProjectBySlugQuery,
    Operations.GetProjectBySlugQueryVariables
  >(query, { slug }, preview)();
};

export const useGetProjectBySlugQuery = <
  TData = Operations.GetProjectBySlugQuery,
  TError = unknown
>(
  variables: Operations.GetProjectBySlugQueryVariables,
  options?: UseQueryOptions<Operations.GetProjectBySlugQuery, TError, TData>,
  preview = false
) =>
  useQuery<Operations.GetProjectBySlugQuery, TError, TData>(
    ["getProjectByTitle", variables],
    fetcher<
      Operations.GetProjectBySlugQuery,
      Operations.GetProjectBySlugQueryVariables
    >(query, variables, preview),
    options
  );
