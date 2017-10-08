import axios from 'axios';
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
    imageUrl: 'http://www.onemusic.ph/img/user-avatar-n.jpg',//default profile img
  };
  return axios({
    method: 'post',
    url: `http://localhost:3000/api/v1/signup`,
    data,
  });
};

export const registerNewUser = (userData) => {
  return (dispatch) => {
    dispatch(registerUser());
    registerUserAPI(userData).then((res) => {
      if (res.data.success === true) {
        //browserHistory.push('/login');

      }
      dispatch(registerUserSuccess(res));
    }).catch((err) => {
      dispatch(registerUserFailure(err));
      console.warn('Error while signing up.', err);
    });
  };
};