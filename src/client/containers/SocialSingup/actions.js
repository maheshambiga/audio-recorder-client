import axios from 'axios';

import {setAuthInfo,setStorage} from './../App/actions';
import {authenticate} from './../Login/actions';

export const authenticateUserAPI = (data) => {

  return axios({
    method: 'post',
    url: `http://localhost:3000/api/v1/login`,
    data,
  });
};


const registerUserAPI = (data) => {

  return axios({
    method: 'post',
    url: `http://localhost:3000/api/v1/signup`,
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