import * as constants from './constants';


export const viewStory = (state = {
  isFetching: false,
  didInvalidate: false,
  error: null,
  result: {}
}, action) => {
  switch (action.type) {

    case constants.INVALIDATE_VIEW_STORY: {
      return Object.assign({}, state, {
        didInvalidate: true,
        result: {}
      });
    }
    case constants.VIEW_STORY_REQUEST: {
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    }
    case constants.VIEW_STORY_SUCCESS: {
      let data;
      if (action.res && action.res.data) {
        data = action.res.data;
      }
      return Object.assign({}, state, {
        result: data,
        isFetching: false
      });
    }
    case constants.VIEW_STORY_FAILURE: {
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