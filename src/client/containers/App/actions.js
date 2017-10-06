import axios from 'axios';

import { SET_APP_URL, SET_AUTH_INFO } from './constants';

export const setAuthInfo = (data) => {
  return {
    type: SET_AUTH_INFO,
    data,
  };
};

export const setRedirectUrl = (redirectUrl) => {
  return {
    type: SET_APP_URL,
    redirectUrl,
  };
};

export const setStorage = (name, value) => {
  localStorage.setItem(name, value);
};
export const getStorage = (name) => {
  return localStorage.getItem(name);
};
export const clearStorage = (name) => {
  localStorage.removeItem(name);
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
