import axios from 'axios';
import {setAuthInfo,setStorage, clearStorage} from './../App/actions';
import {browserHistory} from 'react-router';
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

export const includeToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    axios.defaults.headers.common['x-auth-token'] = null;
    /*if setting null does not remove `Authorization` header then try
            delete axios.defaults.headers.common['Authorization'];
          */
  }
};

export const authenticateUserAPI = (data) => {
  return axios({
    method: 'post',
    url: `http://localhost:3000/api/v1/login`,
    data,
  });
};

export const authenticate = (dispatch, userData)=> {
  dispatch(loginUser());
  authenticateUserAPI(userData).then((res) => {
    if (res.data.success === true) {
      const token = res.headers["x-auth-token"];
      setStorage('token',res.headers["x-auth-token"]);
      dispatch(setAuthInfo({isLoggedIn:true, token}));

    }
    dispatch(loginUserSuccess(res));
  }).catch((err) => {
    clearStorage('token');
    dispatch(loginUserFailure(err));
    console.warn('Error while logging in.', err);
  });
};

export const authenticateUser = (userData) => {
  return (dispatch) => {
    authenticate(dispatch, userData);
  };
};


export const logoutUser = () => {
  return (dispatch)=>{
    dispatch(setAuthInfo({isLoggedIn:false, token:null}));
    clearStorage('token');
    browserHistory.push('/login');
  }
};