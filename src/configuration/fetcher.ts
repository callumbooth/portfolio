import { Stage } from "../types/generated/schemas";

export function fetcher<TData, TVariables extends { draft: Stage }>(
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          variables.draft === Stage.Draft
            ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
            : process.env.GRAPHCMS_PROD_AUTH_TOKEN
        }`
      },

      body: JSON.stringify({
        query,
        variables
      })
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
