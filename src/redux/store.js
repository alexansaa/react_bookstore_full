import { configureStore } from '@reduxjs/toolkit';
import bookReducer from "./books/bookSlice";
import categoriesReducer from "./categories/categiriesSlice";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    categories: categoriesReducer,
  },
});
