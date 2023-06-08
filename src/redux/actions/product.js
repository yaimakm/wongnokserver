import { server } from '../reduces/store';
import axios from 'axios';

export const getAllProducts =
  (category = '', keyword = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'allProductsRequest' });

      const { data } = await axios.get(
        `${server}/products?keyword=${keyword}&category=${category}`
      );

      dispatch({ type: 'allProductsSuccess', payload: data.products });
    } catch (error) {
      dispatch({
        type: 'allProductsFail',
        payload: error.response.data.message,
      });
    }
  };

export const getSomeProduct = id => async dispatch => {
  try {
    dispatch({ type: 'getProductRequest' });

    const { data } = await axios.get(`${server}/products/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: 'getProductSuccess', payload: data.product });
  } catch (error) {
    dispatch({
      type: 'getProductFail',
      payload: error.response.data.message,
    });
  }
};
