import { api } from './../../api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getbooks: builder.query({ query: () => "/books" }),
    getSigleBook: builder.query({ query: (id) => `/books/${id}` }),
    addBook: builder.mutation({
      query: (newBook) => ({
        url: "/books",
        method: "POST",
        body: newBook,
      }),
    }),
  }),
});

export const { useGetbooksQuery, useAddBookMutation, useGetSigleBookQuery } = bookApi;
