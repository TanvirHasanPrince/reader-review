import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reader-review-server.vercel.app",
  }),
  tagTypes: ["reviews"],
  endpoints: () => ({}),
});
