import { IBook } from "../../../components/cards/BookCard";
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


interface IWishList {
  books: IBook[];
  total: number;
}

const initialState: IWishList = {
  books: [],
  total: 0,
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IBook>) => {
      const existing = state.books.find(
        (book) => book._id === action.payload._id
      );

      if (!existing) {
        state.books.push({ ...action.payload });
      } else {
        console.log(`Book Already Exist`);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<IBook>) => {
   const existing = state.books.find(
    (book) => book._id === action.payload._id
   )
   if(existing) {
    state.books = state.books.filter((book)=>book._id !== action.payload._id)
   }
  },
}});

export const { addToWishlist, removeFromWishlist } = wishListSlice.actions;


export default wishListSlice.reducer;