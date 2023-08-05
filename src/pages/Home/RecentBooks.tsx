import BookCard, { IBook } from "../../components/cards/BookCard";
import { useGetbooksQuery } from "../../redux/features/books/booksApi";
// import { useAppDispatch } from '../../redux/hook';

const RecentBooks = () => {
  const { data, isLoading, isError } = useGetbooksQuery(undefined);

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  const recentBooks = data?.data.slice(0, 10) || [];

  return (
    <div className="p-20">
      <h1 className="text-5xl font-[imported] text-red-600 text-center">
        Most recent books added to our list
      </h1>
      {isLoading ? (
        <div className="flex justify-center items-start">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-5 ">
            {recentBooks.map((book: IBook) => (
              <BookCard book={book}></BookCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RecentBooks;
