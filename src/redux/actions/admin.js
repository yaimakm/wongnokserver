import { server } from '../reduces/store';
import axios from 'axios';

export const createProduct = formdata => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-type': 'multipart/form-data',
      },
      withCredentials: true,
    };
    dispatch({ type: 'createProductRequest' });

    const { data } = await axios.post(
      `${server}/createproduct`,
      formdata,
      config
    );
    dispatch({ type: 'createProductSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'createProductFail',
      payload: error.response.data.message,
    });
  }
};

export const deleteProduct = id => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: 'deleteProductRequest' });

    const { data } = await axios.delete(`${server}/products/${id}`, config);
    dispatch({ type: 'deleteProductSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteProductFail',
      payload: error.response.data.message,
    });
  }
};

export const getAllUsers = () => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: 'getAllUsersRequest' });

    const { data } = await axios.get(`${server}/admin/users`, config);
    dispatch({ type: 'getAllUsersSuccess', payload: data.users });
  } catch (error) {
    dispatch({
      type: 'getAllUsersFail',
      payload: error.response.data.message,
    });
  }
};

export const updateUserRole = id => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: 'updateUsersRoleRequest' });

    const { data } = await axios.put(`${server}/admin/users/${id}`, {}, config);
    dispatch({ type: 'updateUsersRoleSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'updateUsersRoleFail',
      payload: error.response.data.message,
    });
  }
};

export const deleteUser = id => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: 'deleteUsersRequest' });

    const { data } = await axios.delete(`${server}/admin/users/${id}`, config);
    dispatch({ type: 'deleteUsersSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteUsersFail',
      payload: error.response.data.message,
    });
  }
};
