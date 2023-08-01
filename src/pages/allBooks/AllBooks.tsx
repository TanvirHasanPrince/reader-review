import BookCard, { IBook } from "../../components/cards/BookCard";
import { useGetbooksQuery } from "../../redux/features/books/booksApi";


const AllBooks = () => {
   const { data, isError } = useGetbooksQuery(undefined);

   if (isError) {
     return <div>Error occurred while fetching data.</div>;
   }

   const recentBooks = data?.data || [];

 return (
   <div className="flex ">
     <div className="m-10">
       <input
         type="text"
         placeholder="Search here"
         className="input input-bordered"
       />
     </div>
     <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-4">
       {recentBooks.map((book: IBook) => (
         <BookCard book={book}></BookCard>
       ))}
     </div>
   </div>
 );
};

export default AllBooks;