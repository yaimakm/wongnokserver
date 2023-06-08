import { createReducer } from '@reduxjs/toolkit';

export const adminReducer = createReducer(
  {},
  {
    getAllUserstRequest: state => {
      state.loading = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getAllUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUsersRoleRequest: state => {
      state.loading = true;
    },
    updateUsersRoleSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateUsersRoleFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUsersRequest: state => {
      state.loading = true;
    },
    deleteUsersSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createProductRequest: state => {
      state.loading = true;
    },
    createProductSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteProductRequest: state => {
      state.loading = true;
    },
    deleteProductSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);
