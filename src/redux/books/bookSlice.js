import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/IqNhFOuHupMUt4Y7YbIq';
const booksEndPoint = '/books';

const initialState = {
  books: [],
  isLoading: true,
  error: undefined,
};

export const getResultItems = createAsyncThunk('result/getResultItems', async (thunkAPI) => {
  try {
    const getBooksUrl = `${url}${booksEndPoint}`;
    const resp = await axios(getBooksUrl);
    console.log(resp.data);
    console.log(Object.values(resp.data));
    // console.log(typeof resp.data);
    return Object.values(resp.data);
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong...');
  }
});

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
  extraReducers: {
    [getResultItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getResultItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getResultItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
