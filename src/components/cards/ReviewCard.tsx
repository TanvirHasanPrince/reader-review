import { ChangeEvent, FormEvent, useState } from "react";
import { useGetReviewQuery, usePostReviewMutation } from "../../redux/features/books/booksApi";
import { useAppSelector } from "../../redux/hook";


interface IProps {
  id: string;
}


const ReviewCard = ({ id }: IProps )=> {
  const { user } = useAppSelector((state) => state.user);
 const [inputValue, setInputValue] = useState<string>("");

   const { data } = useGetReviewQuery(id, {
     refetchOnMountOrArgChange: true,
     pollingInterval: 30000,
   });

 const [postReview, { isLoading }] =
   usePostReviewMutation();


   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
     event.preventDefault();
     console.log(inputValue);
     const options = {
       id: id,
       data: { review: inputValue },
     };
     postReview(options);
     setInputValue("");
   };

   const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
     setInputValue(event.target.value);
   };

    



 return (
   <div className="max-w-7xl mx-auto mt-5">
     <h1 className="text-center font-bold text-3xl text-red-600">
       Readers Reviews
     </h1>
     {user?.email ? (
       <form
         className="flex gap-5 mt-10 items-center justify-center"
         onSubmit={handleSubmit}
       >
         <textarea
           className="textarea textarea-accent"
           onChange={handleChange}
           value={inputValue}
           placeholder="Want to add review?"
         />
         <button type="submit" className="btn btn-accent">
           {isLoading ? "Adding Your Review" : "Add a review"}
         </button>


       </form>
     ) : (
       <h2 className="text-center text-2xl text-red-500">
         Please Login/Signup to add reivew
       </h2>
     )}
     <div className="mt-10">
       {data?.reviews?.map((review: string, index: number) => (
         <div key={index} className="flex gap-3 items-center mb-5">
           <div className="avatar flex flex-col items-center justify-center">
             <div className="w-16 h-16 rounded-full">
               <img src="https://github.com/shadcn.png" />
             </div>
           </div>
           <p>{review}</p>
         </div>
       ))}
     </div>
   </div>
 );
};

export default ReviewCard;