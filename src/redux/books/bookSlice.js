import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  bookItems: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      console.log('adding');
      state.bookItems = [
        ...state.bookItems,
        {
          item_id: uuidv4(),
          title: action.payload.title,
          author: action.payload.author,
          category: action.payload.category,
        },
      ];
    },
    removeBook: (state, action) => {
      const bookId = action.payload.itemId;
      state.bookItems = state.bookItems.filter((book) => book.item_id !== bookId);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
