import axios from 'axios';
import {reset} from 'redux-form';
import {browserHistory} from 'react-router';
import { SIGN_UP_API } from './../../appConstants';
import {
  INVALIDATE_REGISTER_USER,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from './constants';

export const registerUser = () => {
  return {
    type: REGISTER_USER_REQUEST,
  };
};

export const registerUserSuccess = (res) => {
  return {
    type: REGISTER_USER_SUCCESS,
    res,
  };
};

export const registerUserFailure = (res) => {
  return {
    type: REGISTER_USER_FAILURE,
    res,
  };
};
export const invalidateUserRegister = () => {
  return {
    type: INVALIDATE_REGISTER_USER
  };
};

export const registerUserAPI = ({email, firstName, lastName, password}) => {
  const data = {
    type:0,//local registration
    name: `${firstName} ${lastName}`,
    email,
    password,
    imageUrl: 'https://www.starbucks.com/static/images/account/profile_image_generic.svg',//default profile img
  };
  return axios({
    method: 'post',
    url: SIGN_UP_API,
    data,
  });
};

export const registerNewUser = (userData) => {
  return (dispatch) => {
    dispatch(registerUser());
    registerUserAPI(userData).then((res) => {
      if (res.data.success === true) {
        browserHistory.push('/login');
        dispatch(reset('RegisterUser'));
      }
      dispatch(registerUserSuccess(res));
    }).catch((err) => {
      dispatch(registerUserFailure(err));
      console.warn('Error while signing up.', err);
    });
  };
};