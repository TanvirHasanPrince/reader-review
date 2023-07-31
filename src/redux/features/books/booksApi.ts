import { api } from './../../api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getbooks: builder.query({ query: () => "/books" }),
  }),
});

export const { useGetbooksQuery } = bookApi;
