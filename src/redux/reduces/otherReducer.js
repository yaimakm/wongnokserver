import { createReducer } from '@reduxjs/toolkit';

export const otherReducer = createReducer(
  {},
  {
    contactRequest: state => {
      state.loading = true;
    },
    contactSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    contactFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    productRequest: state => {
      state.loading = true;
    },
    productRequestSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    productRequestFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);
