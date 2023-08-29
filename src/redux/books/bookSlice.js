import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newBook = action.payloadl;
      state.bookItems.addItem(newBook);
    },
    removeBook: (state, action) => {
      const bookName = action.payload;
      state.bookItems = state.bookItems.filter((item) => item.bname !== bookName);
    },
  },
});

export const { addItem, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
