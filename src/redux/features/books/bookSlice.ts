
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../../components/cards/BookCard";

interface SearchState {
  query: string;
  genreFilter: string | null;
  publicationYearFilter: string | null;
  results: IBook[];
}

const initialState: SearchState = {
  query: "",
  genreFilter: null,
  publicationYearFilter: null,
  results: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    updateQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    updateGenreFilter: (state, action: PayloadAction<string | null>) => {
      state.genreFilter = action.payload;
    },
    updatePublicationYearFilter: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.publicationYearFilter = action.payload;
    },
    updateResults: (state, action: PayloadAction<IBook[]>) => {
      state.results = action.payload;
    },
  },
});

export const {
  updateQuery,
  updateResults,
  updateGenreFilter,
  updatePublicationYearFilter,
} = bookSlice.actions;
export default bookSlice.reducer;