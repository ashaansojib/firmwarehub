import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CommentApi = createApi({
  reducerPath: "CommentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://softfirm-server.vercel.app/api" }),
  tagTypes: ["comment"],
  endpoints: (builder) => ({
    allComments: builder.query({
      query: () => "/comments",
      providesTags: ["comment"],
    }),
    getComments: builder.query({
      query: ({ id }) => `/comments/${id}`,
      providesTags: ["comment"],
    }),
    addComment: builder.mutation({
      query: (data) => ({
        url: "/comments",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comment"],
    }),
    removeComment: builder.mutation({
      query: (id) => ({
        url: `/comments/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["comment"],
    }),
  }),
});
export const {
  useGetCommentsQuery,
  useAddCommentMutation,
  useAllCommentsQuery,
  useRemoveCommentMutation,
} = CommentApi;
