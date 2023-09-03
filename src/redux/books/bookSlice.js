import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

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

export const postNewBook = createAsyncThunk('result/postNewBook', async ({ myTitle, myAuthor, myCategory }, state, thunkAPI) => {
  const postBooksCreateUrl = `${url}${booksEndPoint}`;
  const payload = {
    item_id: uuidv4(),
    title: myTitle,
    author: myAuthor,
    category: myCategory,
  };
  console.log(payload);
  try {
    const resp = await axios.post(postBooksCreateUrl, payload);
    console.log(resp);
    if (resp.data === 'Created') {
      return payload;
    }
    return thunkAPI.rejectWithValue('something went wrong...');
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
      state.books.push(action.payload);
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
    [postNewBook.pending]: (state) => {
      state.isLoading = true;
    },
    [postNewBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = [
        ...state.books,
        action.payload,
      ];
    },
    [postNewBook.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
