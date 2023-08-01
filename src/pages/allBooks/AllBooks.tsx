// AllBooks.tsx

import { useEffect } from "react";
import BookCard, { IBook } from "../../components/cards/BookCard";
import { useGetbooksQuery } from "../../redux/features/books/booksApi";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  updateQuery,
  updateGenreFilter,
  updatePublicationYearFilter,
  updateResults,
} from "../../redux/features/books/bookSlice";

const AllBooks = () => {
  const dispatch = useAppDispatch();
  const { data, isError } = useGetbooksQuery(undefined);
  const { query, genreFilter, publicationYearFilter, results } = useAppSelector(
    (state) => state.book
  );

  useEffect(() => {
    // When the query or filters change, fetch the data and update the results
    let filteredBooks = data?.data || [];
    if (query) {
      filteredBooks = filteredBooks.filter(
        (book: IBook) =>
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (genreFilter) {
      filteredBooks = filteredBooks.filter((book: IBook) =>
        book.genre.toLowerCase().includes(genreFilter.toLowerCase())
      );
    }
    if (publicationYearFilter) {
      filteredBooks = filteredBooks.filter((book: IBook) =>
        book.publication_data.includes(publicationYearFilter)
      );
    }
    dispatch(updateResults(filteredBooks));
  }, [query, genreFilter, publicationYearFilter, data, dispatch]);

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  const genres = Array.from(
    new Set(data?.data.map((book: IBook) => book.genre)) || []
  );
  const publicationYears = Array.from(
    new Set(data?.data.map((book: IBook) => book.publication_data)) || []
  );



  const booksToShow =
    query || genreFilter || publicationYearFilter ? results : data?.data || [];

  return (
    <div className="lg:flex m-5 lg:m-2 md:m-5">
      <div className="m-10 flex flex-col">
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered w-full"
          onChange={(e) => dispatch(updateQuery(e.target.value))}
        />
        <div className="py-2">
          <select
            className="select select-bordered w-full"
            value={genreFilter || ""}
            onChange={(e) =>
              dispatch(updateGenreFilter(e.target.value as string || null))
            }
          >
            <option value="">Filter by Genre</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <select
            className="select select-bordered w-full"
            value={publicationYearFilter || ""}
            onChange={(e) =>
              dispatch(updatePublicationYearFilter(e.target.value || null))
            }
          >
            <option value="">Filter by Publication Year</option>
            {publicationYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
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
