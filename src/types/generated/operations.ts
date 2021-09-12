import * as Types from "./schemas";

export type AboutPageVariables = Types.Exact<{ [key: string]: never }>;

export type AboutPage = {
  __typename?: "Query";
  page?: Types.Maybe<{
    __typename?: "Page";
    title: string;
    slug: string;
    body: { __typename?: "PageBodyRichText"; json: any };
  }>;
  person?: Types.Maybe<{
    __typename?: "Person";
    firstName?: Types.Maybe<string>;
    secondName?: Types.Maybe<string>;
    email?: Types.Maybe<string>;
    dob?: Types.Maybe<any>;
    skills: Array<Types.Skills>;
    location?: Types.Maybe<string>;
  }>;
  employments: Array<{
    __typename?: "Employment";
    company: string;
    jobTitle: string;
    startDate: any;
    endDate?: Types.Maybe<any>;
  }>;
};

export type ContactPageVariables = Types.Exact<{ [key: string]: never }>;

export type ContactPage = {
  __typename?: "Query";
  page?: Types.Maybe<{
    __typename?: "Page";
    title: string;
    body: { __typename?: "PageBodyRichText"; json: any };
  }>;
  person?: Types.Maybe<{ __typename?: "Person"; email?: Types.Maybe<string> }>;
};

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
    body: { __typename?: "ProjectBodyRichText"; raw: any };
  }>;
};

export type GetProjectsVariables = Types.Exact<{ [key: string]: never }>;

export type GetProjects = {
  __typename?: "Query";
  projects: Array<{ __typename?: "Project"; slug: string }>;
};
