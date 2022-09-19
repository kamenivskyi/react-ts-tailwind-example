import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TUser, ServerResponse } from "../../models";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  endpoints: (build) => ({
    searchUsers: build.query<TUser[], string>({
      query: (search: string) => ({
        url: `search/users`,
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response: ServerResponse<TUser>) => response.items,
    }),
  }),
});

export const { useSearchUsersQuery } = githubApi;
