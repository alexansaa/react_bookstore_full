import { createSlice } from '@reduxjs/toolkit';
import { uuid } from 'uuid';

const initialState = {
  bookItems: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookItems = [
        ...state.bookItems,
        {
          id: uuid(),
          title: action.payload.author,
        },
      ]
    },
    removeBook: (state, action) => {
      state.bookItems = state.bookItems.filter((book) => book.id !== action.id);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
