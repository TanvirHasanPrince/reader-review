// AllBooks.tsx

import { useEffect } from "react";
import BookCard, { IBook } from "../../components/cards/BookCard";
import { useGetbooksQuery } from "../../redux/features/books/booksApi";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  updateQuery,
  updateResults,
} from "../../redux/features/books/bookSlice";

const AllBooks = () => {
  const dispatch = useAppDispatch();
  const { data, isError } = useGetbooksQuery(undefined);
  const { query, results } = useAppSelector((state) => state.book);

  useEffect(() => {
    // When the query changes, fetch the data and update the results
    if (query) {
      const filteredBooks = data?.data.filter(
        (book: IBook) =>
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase())
      );
      dispatch(updateResults(filteredBooks || []));
    } else {
      // If the query is empty, reset the results to the full data
      dispatch(updateResults(data?.data || []));
    }
  }, [query, data, dispatch]);

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  const booksToShow = query ? results : data?.data || [];

  return (
    <div className="flex">
      <div className="m-10">
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered"
          onChange={(e) => dispatch(updateQuery(e.target.value))}
        />
        <button
          className="btn btn-secondary "
          onClick={() => dispatch(updateQuery(""))}
        >
          Clear Search
        </button>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-4">
        {booksToShow.map((book: IBook) => (
          <BookCard book={book} key={book.title} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
