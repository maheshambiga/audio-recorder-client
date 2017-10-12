import * as constants from './constants';


export const stories = (state = {
  isFetching: false,
  didInvalidate: false,
  error: null,
  result: {},
  filterBy:'all'
}, action) => {
  switch (action.type) {
    case constants.SET_FILTER_TYPE: {
      return Object.assign({}, state, {
        filterBy: action.genre
      });
    }
    case constants.INVALIDATE_GET_STORIES: {
      return Object.assign({}, state, {
        didInvalidate: true,
        result: {}
      });
    }
    case constants.GET_STORIES_REQUEST: {
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    }
    case constants.GET_STORIES_SUCCESS: {
      let data;
      if (action.res && action.res.data) {
        data = action.res.data;
      }
      return Object.assign({}, state, {
        result: data,
        isFetching: false
      });
    }
    case constants.GET_STORIES_FAILURE: {
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