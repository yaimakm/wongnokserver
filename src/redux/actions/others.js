import { server } from '../reduces/store';
import axios from 'axios';

export const contactUs = (name, email, message) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
      withCredentials: true,
    };

    dispatch({ type: 'contactRequest' });

    const { data } = await axios.post(
      `${server}/contact`,
      { name, email, message },
      config
    );

    dispatch({ type: 'contactSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'contactFail',
      payload: error.response.data.message,
    });
  }
};

export const productRequest = (name, email, product) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
      withCredentials: true,
    };

    dispatch({ type: 'productRequest' });

    const { data } = await axios.post(
      `${server}/productrequest`,
      { name, email, product },
      config
    );

    dispatch({ type: 'productRequestSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'productRequestFail',
      payload: error.response.data.message,
    });
  }
};
