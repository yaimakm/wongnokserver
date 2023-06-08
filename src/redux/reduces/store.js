import { configureStore } from '@reduxjs/toolkit';
import { profileReducer, userReducer } from './userReducer';
import { productReducer } from './productReducer';
import { adminReducer } from './adminReducer';
import { otherReducer } from './otherReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    product: productReducer,
    admin: adminReducer,
    other: otherReducer,
  },
});

export default store;

export const server = 'http://localhost:4000/api/v1/';
