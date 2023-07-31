import BookCard from '../../components/cards/BookCard';

const RecentBooks = () => {

 const recentBooks = [
   {
     Title: "To Kill a Mockingbird",
     Author: "Harper Lee",
     Genre: "Fiction, Coming-of-age, Southern Gothic",
     PublicationDate: "July 11, 1960",
     image:
       "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
   },
   {
     Title: "To Kill a Mockingbird",
     Author: "Harper Lee",
     Genre: "Fiction, Coming-of-age, Southern Gothic",
     PublicationDate: "July 11, 1960",
     image:
       "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
   },
   {
     Title: "To Kill a Mockingbird",
     Author: "Harper Lee",
     Genre: "Fiction, Coming-of-age, Southern Gothic",
     PublicationDate: "July 11, 1960",
     image:
       "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
   },
   {
     Title: "To Kill a Mockingbird",
     Author: "Harper Lee",
     Genre: "Fiction, Coming-of-age, Southern Gothic",
     PublicationDate: "July 11, 1960",
     image:
       "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
   },
   {
     Title: "To Kill a Mockingbird",
     Author: "Harper Lee",
     Genre: "Fiction, Coming-of-age, Southern Gothic",
     PublicationDate: "July 11, 1960",
     image:
       "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
   },
   {
     Title: "To Kill a Mockingbird",
     Author: "Harper Lee",
     Genre: "Fiction, Coming-of-age, Southern Gothic",
     PublicationDate: "July 11, 1960",
     image:
       "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
   },
 ];


 return (
   <div className="p-20">
     <h1 className="text-5xl font-[imported] text-red-600 text-center">
       Most recent book added to our list
     </h1>
     <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-3 ">
       {recentBooks.map((book) => (
         <BookCard book={book}></BookCard>
       ))}
     </div>
   </div>
 );
};

export default RecentBooks;