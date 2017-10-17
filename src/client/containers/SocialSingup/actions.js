import axios from 'axios';
import { authenticate } from './../Login/actions';
import { LOGIN_API } from './../../appConstants';
import { SIGN_UP_API } from './../../appConstants';
export const authenticateUserAPI = (data) => {

  return axios({
    method: 'post',
    url: LOGIN_API,
    data,
  });
};


const registerUserAPI = (data) => {

  return axios({
    method: 'post',
    url: SIGN_UP_API,
    data,
  });
};

export const registerUser = (userData) => {
  const {email, type, token} = userData;
  return (dispatch) => {

    registerUserAPI(userData).then((res) => {
      if (res.data.success === true) {

        authenticate(dispatch, {email, type, password:token});
      }

    }).catch((err) => {

      console.warn('Error while registering social account.', err);
    });
  };
};