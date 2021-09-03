import { fetcher } from "@/root/configuration/fetcher";
import { useQuery, UseQueryOptions } from "react-query";
import * as Operations from "../../types/generated/operations";

import gql from "graphql-tag";

import { print } from "graphql";

const query = print(gql`
  query getProjectByTitle($id: ID!) {
    project(where: { id: $id }) {
      id
      title
      skills
      launchDate
      body {
        html
      }
    }
  }
`);

export const getProjectByTitle = async (id: string, preview = false) => {
  return fetcher<
    Operations.GetProjectByTitleQuery,
    Operations.GetProjectByTitleQueryVariables
  >(query, { id }, preview)();
};

export const useGetProjectByTitleQuery = <
  TData = Operations.GetProjectByTitleQuery,
  TError = unknown
>(
  variables: Operations.GetProjectByTitleQueryVariables,
  options?: UseQueryOptions<Operations.GetProjectByTitleQuery, TError, TData>,
  preview = false
) =>
  useQuery<Operations.GetProjectByTitleQuery, TError, TData>(
    ["getProjectByTitle", variables],
    fetcher<
      Operations.GetProjectByTitleQuery,
      Operations.GetProjectByTitleQueryVariables
    >(query, variables, preview),
    options
  );
