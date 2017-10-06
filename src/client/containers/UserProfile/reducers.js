import {USER_PROFILE_REQUEST,USER_PROFILE_SUCCESS,USER_PROFILE_FAILURE,INVALIDATE_USER_PROFILE} from './constants';


export const userProfile = (state = {
  isFetching: false,
  didInvalidate: false,
  error: null,
  result: {},
}, action) => {
  switch (action.type) {
    case INVALIDATE_USER_PROFILE: {
      return Object.assign({}, state, {
        didInvalidate: true,
        result: {}
      });
    }
    case USER_PROFILE_REQUEST: {
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    }
    case USER_PROFILE_SUCCESS: {
      let data;
      if (action.res && action.res.data) {
        data = action.res.data.data;
      }
      return Object.assign({}, state, {
        result: data,
        isFetching: false
      });
    }
    case USER_PROFILE_FAILURE: {
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