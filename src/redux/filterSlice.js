import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});
export const { setFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
