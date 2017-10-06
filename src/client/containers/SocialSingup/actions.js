import axios from 'axios';
import {setAuthInfo,setStorage} from './../App/actions';

export const authenticateUserAPI = (data) => {

  return axios({
    method: 'post',
    url: `http://localhost:3000/api/v1/signupSocial`,
    data,
  });
};

export const authenticateUser = (userData) => {
  return (dispatch) => {

    authenticateUserAPI(userData).then((res) => {
      if (res.data.success === true) {
        const token = res.headers["x-auth-token"];
        setStorage('token',res.headers["x-auth-token"]);
        dispatch(setAuthInfo({isLoggedIn:true, token}));

      }

    }).catch((err) => {

      console.warn('Error while logging in.', err);
    });
  };
};