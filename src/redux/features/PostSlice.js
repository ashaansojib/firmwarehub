import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9988/api" }),
  tagTypes: ["firmware"],
  endpoints: (builder) => ({
    getFirmwares: builder.query({
      query: ({ page, limit, brand }) =>
        `/firmwares?page=${page}&limit=${limit}&brand=${brand}`,
      providesTags: ["firmware"],
    }),
    allFirmwares: builder.query({
      query: () => `/firmwares`,
      providesTags: ["firmware"],
    }),
    addFirmware: builder.mutation({
      query: (data) => ({
        url: "/firmwares",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["firmware"],
    }),
    singleFirmware: builder.mutation({
      query: (id) => ({
        url: `/firmwares/${id}`,
      }),
    }),
    removeFirmware: builder.mutation({
      query: (id) => ({
        url: `/firmwares/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["firmware"],
    }),
  }),
});
export const {
  useGetFirmwaresQuery,
  useAddFirmwareMutation,
  useRemoveFirmwareMutation,
  useSingleFirmwareMutation,
  useAllFirmwaresQuery
} = postApi;
