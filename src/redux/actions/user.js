import { server } from '../reduces/store';
import axios from 'axios';

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'loginRequest' });
    const response = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );
    const data = response.data || {}; // Ensure data is not undefined
    dispatch({ type: 'loginSuccess', payload: data });
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'An error occurred';
    dispatch({ type: 'loginFail', payload: errorMessage });
  }
};

export const register = formdata => async dispatch => {
  try {
    dispatch({ type: 'registerRequest' });
    const response = await axios.post(`${server}/register`, formdata, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    const data = response.data || {}; // Ensure data is not undefined
    dispatch({ type: 'registerSuccess', payload: data });
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'An error occurred';
    dispatch({ type: 'registerFail', payload: errorMessage });
  }
};

export const loadUser = () => async dispatch => {
  try {
    dispatch({ type: 'loadUserRequest' });
    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });
    if (data) {
      console.log(data);
      dispatch({ type: 'loadUserSuccess', payload: data.user });
    } else {
      throw new Error('Invalid response data');
    }
  } catch (error) {
    dispatch({
      type: 'loadUserFail',
      payload: error.response?.data?.message || 'Failed to load user',
    });
  }
};
export const logout = () => async dispatch => {
  try {
    dispatch({ type: 'logoutRequest' });
    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });
    if (data) {
      console.log(data);
      dispatch({ type: 'logoutSuccess', payload: data.message });
    } else {
      throw new Error('Invalid response data');
    }
  } catch (error) {
    dispatch({
      type: 'logoutFail',
      payload: error.response?.data?.message || 'Logout failed',
    });
  }
};
