import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sharedLinkApi = createApi({
  reducerPath: "sharedLinkApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://softfirm-server.vercel.app/api",
  }),
  tagTypes: ["links"],
  endpoints: (builder) => ({
    allSharedLinks: builder.query({
      query: () => "/links",
      providesTags: ["links"],
    }),
    addSharedLink: builder.mutation({
      query: (data) => ({
        url: "/links",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["links"],
    }),
    removeSharedLink: builder.mutation({
      query: (id) => ({
        url: `/links/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["links"],
    }),
    sharedLinkByCat: builder.query({
      query: (cat) => ({
        url: `/links/${cat}`,
      }),
    }),
  }),
});
export const {
  useAllSharedLinksQuery,
  useAddSharedLinkMutation,
  useRemoveSharedLinkMutation,
  useSharedLinkByCatQuery,
} = sharedLinkApi;
