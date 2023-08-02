import { ChangeEvent, FormEvent, useState } from "react";
import { useGetReviewQuery, usePostReviewMutation } from "../../redux/features/books/booksApi";

interface IProps {
  id: string;
}


const ReviewCard = ({ id }: IProps )=> {
 const [inputValue, setInputValue] = useState<string>("");

   const { data } = useGetReviewQuery(id, {
     refetchOnMountOrArgChange: true,
     pollingInterval: 30000,
   });

 const [postReview, { isLoading, isError, isSuccess }] =
   usePostReviewMutation();

   console.log(isLoading);
   console.log(isError);
   console.log(isSuccess);

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
     <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
       <textarea
         className="min-h-[30px]"
         onChange={handleChange}
         value={inputValue}
       />
       <button type="submit" className="rounded-full h-10 w-10 p-2 text-[25px]">
         Send
       </button>
     </form>
     <div className="mt-10">
       {data?.reviews?.map((review: string, index: number) => (
         <div key={index} className="flex gap-3 items-center mb-5">
           <div className="avatar">
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