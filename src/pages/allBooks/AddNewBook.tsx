import { useState } from "react";
import { useAddBookMutation } from "../../redux/features/books/booksApi";


const AddNewBook = () => {
 const [title, setTitle] = useState("");
 const [author, setAuthor] = useState("");
 const [genre, setGenre] = useState("");
 const [publicationYear, setPublicationYear] = useState("");
 const [image, setImage] = useState("");
 const [summary, setSummary] = useState("");
 const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const newBook = {
        title,
        author,
        genre,
        publication_data: publicationYear,
        image,
        summary,

      };
console.log(newBook);

       addBook(newBook);
   

      // Clear form fields after successful submission
      setTitle("");
      setAuthor("");
      setGenre("");
      setPublicationYear("");
      setImage("");
      setSummary("");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

 return (
   <div className="m-5">
     <h1 className="text-center text-red-600 font-bold text-xl">
       Add a New Book
     </h1>
     <form
       className="flex justify-center items-center flex-col"
       onSubmit={handleSubmit}
     >
       <input
         type="text"
         placeholder="Title"
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         className="input input-bordered w-2/4 m-2"
       />
       <input
         type="text"
         placeholder="Author"
         value={author}
         onChange={(e) => setAuthor(e.target.value)}
         className="input input-bordered w-2/4 m-2"
       />
       <input
         type="text"
         placeholder="Genre"
         value={genre}
         onChange={(e) => setGenre(e.target.value)}
         className="input input-bordered w-2/4 m-2"
       />
       <input
         type="text"
         placeholder="Publication year"
         value={publicationYear}
         onChange={(e) => setPublicationYear(e.target.value)}
         className="input input-bordered w-2/4 m-2"
       />
       <input
         type="text"
         placeholder="Cover Image Link"
         value={image}
         onChange={(e) => setImage(e.target.value)}
         className="input input-bordered w-2/4 m-2"
       />
       <input
         type="text"
         placeholder="Summary"
         value={summary}
         onChange={(e) => setSummary(e.target.value)}
         className="input input-bordered w-2/4 m-2"
       />
       <button className="btn btn-accent w-2/4" type="submit">
         {isLoading ? "Adding..." : "Add New Book"}
       </button>
       {/* Show success or error message */}
       {isSuccess && <p className="text-green-500">Book added successfully!</p>}
       {isError && <p className="text-red-500">Failed to add book.</p>}
     </form>
   </div>
 );
};

export default AddNewBook;