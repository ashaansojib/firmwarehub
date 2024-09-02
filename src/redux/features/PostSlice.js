import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9988/api" }),
  endpoints: (builder) => ({
    getFirmwares: builder.query({
      query: () => "/firmwares",
    }),
    addFirmware: builder.mutation({
      query: (data) => ({
        url: "/firmwares",
        method: "POST",
        body: data,
      }),
    }),
    removeFirmware: builder.mutation({
      query: (id) => ({
        url: `/firmwares/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useGetFirmwaresQuery,
  useAddFirmwareMutation,
  useRemoveFirmwareMutation,
} = postApi;
