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
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/reviews/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    getReview: builder.query({
      query: (id) => `/reviews/${id}`,
      providesTags: ["reviews"],
    }),
  }),
});

export const { useGetbooksQuery, useAddBookMutation, useGetSigleBookQuery, useGetReviewQuery, usePostReviewMutation} = bookApi;
