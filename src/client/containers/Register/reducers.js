import {REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_FAILURE,INVALIDATE_REGISTER_USER} from './constants';


export const registerUser = (state = {
  isFetching: false,
  didInvalidate: false,
  error: null,
  result: {},
}, action) => {
  switch (action.type) {
    case INVALIDATE_REGISTER_USER: {
      return Object.assign({}, state, {
        didInvalidate: true,
        result: {}
      });
    }
    case REGISTER_USER_REQUEST: {
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    }
    case REGISTER_USER_SUCCESS: {
      let data;
      if (action.res && action.res.data) {
        data = action.res.data;
      }
      return Object.assign({}, state, {
        result: data,
        isFetching: false
      });
    }
    case REGISTER_USER_FAILURE: {
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