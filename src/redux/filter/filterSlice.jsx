import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  filter: '',

};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    }

  },
})
export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
