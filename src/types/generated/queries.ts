import * as Types from "./operations";

import { useQuery, UseQueryOptions } from "react-query";
import { fetcher } from "@/root/configuration/fetcher";

export const AboutPageDocument = `
    query AboutPage {
  page(where: {slug: "about"}) {
    title
    slug
    body {
      json
    }
  }
  person(where: {id: "cktg47hc0eeoo0c54lcu96joe"}) {
    firstName
    secondName
    email
    dob
    skills
    location
  }
  employments {
    company
    jobTitle
    startDate
    endDate
  }
}
    `;
export const useAboutPage = <TData = Types.AboutPage, TError = unknown>(
  variables?: Types.AboutPageVariables,
  options?: UseQueryOptions<Types.AboutPage, TError, TData>
) =>
  useQuery<Types.AboutPage, TError, TData>(
    ["AboutPage", variables],
    fetcher<Types.AboutPage, Types.AboutPageVariables>(
      AboutPageDocument,
      variables
    ),
    options
  );
useAboutPage.fetcher = (variables?: Types.AboutPageVariables) =>
  fetcher<Types.AboutPage, Types.AboutPageVariables>(
    AboutPageDocument,
    variables
  );
export const ContactPageDocument = `
    query ContactPage {
  page(where: {slug: "contact"}) {
    title
    body {
      json
    }
  }
  person(where: {id: "cktg47hc0eeoo0c54lcu96joe"}) {
    email
  }
}
    `;
export const useContactPage = <TData = Types.ContactPage, TError = unknown>(
  variables?: Types.ContactPageVariables,
  options?: UseQueryOptions<Types.ContactPage, TError, TData>
) =>
  useQuery<Types.ContactPage, TError, TData>(
    ["ContactPage", variables],
    fetcher<Types.ContactPage, Types.ContactPageVariables>(
      ContactPageDocument,
      variables
    ),
    options
  );
useContactPage.fetcher = (variables?: Types.ContactPageVariables) =>
  fetcher<Types.ContactPage, Types.ContactPageVariables>(
    ContactPageDocument,
    variables
  );
export const HomePageDocument = `
    query HomePage {
  projects(where: {featured: true}) {
    title
    slug
    rotation
    summary
  }
}
    `;
export const useHomePage = <TData = Types.HomePage, TError = unknown>(
  variables?: Types.HomePageVariables,
  options?: UseQueryOptions<Types.HomePage, TError, TData>
) =>
  useQuery<Types.HomePage, TError, TData>(
    ["HomePage", variables],
    fetcher<Types.HomePage, Types.HomePageVariables>(
      HomePageDocument,
      variables
    ),
    options
  );
useHomePage.fetcher = (variables?: Types.HomePageVariables) =>
  fetcher<Types.HomePage, Types.HomePageVariables>(HomePageDocument, variables);
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
    skills
    rotation
    title
    summary
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
