import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API slice
export const usersApi = createApi({
  reducerPath: "usersApi", // Optional, but helps to namespace the reducer
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9988/api", // Base URL for the API
  }),
  endpoints: (builder) => ({
    // Define the "getUsers" query endpoint
    getUsers: builder.query({
      query: () => "/users",
    }),
    // Define the "addUser" mutation endpoint
    addUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetUsersQuery, useAddUserMutation } = usersApi;
