
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../../components/cards/BookCard";

interface SearchState {
  query: string;
  results: IBook[];
}

const initialState: SearchState = {
  query: "",
  results: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    updateQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    updateResults: (state, action: PayloadAction<IBook[]>) => {
      state.results = action.payload;
    },
  },
});

export const { updateQuery, updateResults } = bookSlice.actions;
export default bookSlice.reducer;