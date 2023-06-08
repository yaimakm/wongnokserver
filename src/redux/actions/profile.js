import { server } from '../reduces/store';
import axios from 'axios';

export const updateProfile = (name, email) => async dispatch => {
  try {
    dispatch({ type: 'updateProfileRequest' });

    const { data } = await axios.put(
      `${server}/updateprofile`,
      { name, email },
      {
        headers: {
          'content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({ type: 'updateProfileSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'updateProfileFail',
      payload: error.response.data.message,
    });
  }
};
export const updatepProfilePicture = formdata => async dispatch => {
  try {
    dispatch({ type: 'updateProfilePictureRequest' });

    const { data } = await axios.put(
      `${server}/updateprofilepicture`,
      formdata,
      {
        headers: {
          'Content-type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );

    dispatch({ type: 'updateProfilePictureSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'updateProfilePictureFail',
      payload: error.response.data.message,
    });
  }
};

export const changePassword = (oldPassword, newPassword) => async dispatch => {
  try {
    dispatch({ type: 'changePasswordRequest' });

    const { data } = await axios.put(
      `${server}/changepassword`,
      { oldPassword, newPassword },
      {
        headers: {
          'content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({ type: 'changePasswordSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'changePasswordFail',
      payload: error.response.data.message,
    });
  }
};

export const forgetPassword = email => async dispatch => {
  try {
    dispatch({ type: 'forgetPasswordRequest' });
    const config = {
      headers: {
        'content-type': 'application/json',
      },
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${server}/forgetpassword`,
      {
        email,
      },
      config
    );

    dispatch({ type: 'forgetPasswordSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'forgetPasswordFail',
      payload: error.response.data.message,
    });
  }
};

export const resetPassword = (token, password) => async dispatch => {
  try {
    dispatch({ type: 'resetPasswordRequest' });
    const config = {
      headers: {
        'content-type': 'application/json',
      },
      withCredentials: true,
    };
    const { data } = await axios.put(
      `${server}/resetpassword/${token}`,
      {
        password,
      },
      config
    );

    dispatch({ type: 'resetPasswordSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'resetPasswordFail',
      payload: error.response.data.message,
    });
  }
};

export const addToCollection = id => async dispatch => {
  try {
    dispatch({ type: 'addToCollectionRequest' });
    const config = {
      headers: {
        'content-type': 'application/json',
      },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/addtoplaylist`,
      {
        id,
      },
      config
    );

    dispatch({ type: 'addToCollectionSuccess', payload: data.products });
  } catch (error) {
    dispatch({
      type: 'addToCollectionFail',
      payload: error.response.data.message,
    });
  }
};

export const removeFromCollection = id => async dispatch => {
  try {
    dispatch({ type: 'removeFromCollectionRequest' });
    const config = {
      withCredentials: true,
    };

    const { data } = await axios.delete(
      `${server}/removefromplaylist?id=${id}`,
      config
    );

    dispatch({ type: 'removeFromCollectionSuccess', payload: data.products });
  } catch (error) {
    dispatch({
      type: 'removeFromCollectionFail',
      payload: error.response.data.message,
    });
  }
};
