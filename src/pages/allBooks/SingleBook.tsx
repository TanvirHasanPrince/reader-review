import { useParams } from "react-router-dom";
import { useGetSigleBookQuery } from "../../redux/features/books/booksApi";
import ReviewCard from "../../components/cards/ReviewCard";

const SingleBook = () => {
  const { id } = useParams();

  const { data: book, isLoading, error } = useGetSigleBookQuery(id);
  console.log(isLoading);
  console.log(error);

  return (
    <div className="lg:m-14 md:m-10 m-4">
      <div className="flex justify-center mx-auto items-center md:flex-col lg:flex-row flex-col">
        <div className="w-3/4 md:w-2/4 lg:w-full">
          <img src={book?.image} alt="book_image" />
        </div>
        <div className=" space-y-3 p-10">
          <h1 className="md:text-2xl lg:text-3xl text-xl font-semibold">
            {book?.title}
          </h1>
          <p className="lg:text-xl md:text-xl text-lg">
            <span className="font-bold">Author: </span>
            {book?.author}
          </p>
          <p className="lg:text-xl md:text-xl text-lg">
            <span className="font-bold">Genre: </span> {book?.genre}
          </p>
          <p className="lg:text-xl md:text-xl text-lg">
            <span className="font-bold">Publication Year: </span>
            {book?.publication_data}
          </p>
          <p className="lg:text-xl md:text-xl text-lg">
            <h1 className="font-bold">Summary</h1> {book?.summary}
          </p>
          <div className="p-10 flex items-center justify-center flex-col md:flex-row lg:flex-row">
            <button className="btn btn-info my-5 md:mx-5 lg:mx-5">
              Edit Book Information
            </button>
            <button className="btn btn-error">Delete The Book</button>
          </div>
        </div>
      </div>
      <ReviewCard id={id!} />
    </div>
  );
};

export default SingleBook;
