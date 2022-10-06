import { createSlice } from '@reduxjs/toolkit';

export const SearchSlice = createSlice({
  name: 'search',
  initialState: {
    search: {
        query: "",
      },
  },
  reducers: {
    set: (state, action) => {
      state.search = action.payload;
    },
  },

});

export const { set } = SearchSlice.actions;

export const selectQuery = (state) => state.search.search;

export default SearchSlice.reducer;