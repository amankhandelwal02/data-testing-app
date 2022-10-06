import { createSlice } from '@reduxjs/toolkit';

export const FilterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: {
        option: "All",
      },
  },
  reducers: {
    set: (state, action) => {
      state.filter = action.payload;
    },
  },

});

export const { set } = FilterSlice.actions;

export const selectFilter = (state) => state.filter.filter;

export default FilterSlice.reducer;