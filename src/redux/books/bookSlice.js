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
    const myData = resp.data;

    const myTransData = [];

    Object.keys(myData).forEach((key) => {
      myTransData.push(myData[key][0]);
    });

    return myTransData;
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
      const { myTitle, myAuthor, myCategory } = action.payload;
      console.log(`type ${state.books}`);
      state.books = [
        ...state.books,
        {
          item_id: uuidv4(),
          title: myTitle,
          author: myAuthor,
          category: myCategory,
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
