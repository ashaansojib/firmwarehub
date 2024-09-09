import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sharedLinkApi = createApi({
  reducerPath: "sharedLinkApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9988/api",
  }),
  endpoints: (builder) => ({
    allSharedLinks: builder.query({
      query: () => "/links",
    }),
    addSharedLink: builder.mutation({
      query: (data) => ({
        url: "/links",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useAllSharedLinksQuery, useAddSharedLinkMutation } =
  sharedLinkApi;
