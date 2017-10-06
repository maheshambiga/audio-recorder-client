import axios from 'axios';
import {setAuthInfo,setStorage} from './../App/actions';
import {
  INVALIDATE_LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS
} from './constants';

export const loginUser = () => {
  return {
    type: LOGIN_USER_REQUEST,
  };
};

export const loginUserSuccess = (res) => {
  return {
    type: LOGIN_USER_SUCCESS,
    res,
  };
};

export const loginUserFailure = (res) => {
  return {
    type: LOGIN_USER_FAILURE,
    res,
  };
};
export const invalidateUserLogin = () => {
  return {
    type: INVALIDATE_LOGIN_USER
  };
};


export const authenticateUserAPI = (data) => {

  return axios({
    method: 'post',
    url: `http://localhost:3000/api/v1/login`,
    data,
  });
};

export const authenticateUser = (userData, type) => {
  return (dispatch) => {
    dispatch(loginUser());
    authenticateUserAPI(userData).then((res) => {
      if (res.data.success === true) {
        const token = res.headers["x-auth-token"];
        setStorage('token',res.headers["x-auth-token"]);
        dispatch(setAuthInfo({isLoggedIn:true, token}));

      }
      dispatch(loginUserSuccess(res));
    }).catch((err) => {
      dispatch(loginUserFailure(err));
      console.warn('Error while logging in.', err);
    });
  };
};