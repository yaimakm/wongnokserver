import { createReducer } from '@reduxjs/toolkit';

export const productReducer = createReducer(
  { products: [] },
  {
    allProductsRequest: state => {
      state.loading = true;
    },
    allProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    allProductsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getProductRequest: state => {
      state.loading = true;
    },
    getProductSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    getProductsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addToCollectionRequest: state => {
      state.loading = true;
    },
    addToCollectionSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addToCollectionFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);
