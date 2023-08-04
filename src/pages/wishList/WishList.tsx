
import WishListCard from "../../components/cards/WishListCard";
import {  useAppSelector } from "../../redux/hook";


const WishList = () => {

   const { books } = useAppSelector((state) => state.wishlist);
   // const dispatch = useAppDispatch();



  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-4">
      {books.map((book) => (
        <WishListCard key={book._id} book={book}></WishListCard>
      ))}
    </div>
  );
};

export default WishList;
