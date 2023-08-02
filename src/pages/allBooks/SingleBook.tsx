import { useParams } from "react-router-dom";
import { useGetSigleBookQuery } from "../../redux/features/books/booksApi";

const SingleBook = () => {
  const { id } = useParams();

  const { data: book, isLoading, error } = useGetSigleBookQuery(id);
  console.log(isLoading);
  console.log(error);

  return (
    <div className="lg:m-14 md:m-10 m-4">
      <div className="flex justify-center mx-auto items-center md:flex-row lg:flex-row flex-col">
        <div className="w-1/4">
          <img src={book?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3 p-10">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p className="text-xl">Author: {book?.author}</p>
          <p className="text-xl">Genre: {book?.genre}</p>
          <p className="text-xl">Publication Date: {book?.publication_data}</p>
          <p className="text-xl">Publication Date: {book?.summary}</p>

          <button className="btn btn-info">Edit</button>
          <button className="btn btn-error">Delete</button>
        </div>
      </div>
      {/* <bookReview id={id!} /> */}
    </div>
  );
};

export default SingleBook;
