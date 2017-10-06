import {
  INVALIDATE_LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS
} from './constants';

export const loginUser = (state = {
  isFetching: false,
  didInvalidate: false,
  error: null,
  result: {},
}, action) => {
  switch (action.type) {
    case INVALIDATE_LOGIN_USER: {
      return Object.assign({}, state, {
        didInvalidate: true,
        result: {}
      });
    }
    case LOGIN_USER_REQUEST: {
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    }
    case LOGIN_USER_SUCCESS: {
      let data;
      if (action.res && action.res.data) {
        data = action.res.data;
      }
      return Object.assign({}, state, {
        result: data,
        isFetching: false
      });
    }
    case LOGIN_USER_FAILURE: {
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        error: action.error
      });
    }
    default:
      return state;
  }
};


