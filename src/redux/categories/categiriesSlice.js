import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoriesItem: [],
    categState: 'Under Construction',
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
      checkStatus: (state) => {
        state.categState = 'Under Construction';
      }
    }
});

export const {checkStatus} = categoriesSlice.actions;
export default categoriesSlice.reducer;