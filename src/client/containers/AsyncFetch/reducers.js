import { ASYNC_FETCH, ASYNC_FETCH_FAILURE, ASYNC_FETCH_SUCCESS } from './constants';

/**
 * Reducer to handle all async calls and show/hide loader accordingly.
 * @param state : async status i.e isFetching, error
 * @param action : data and type
 * @returns {*} an Object denoting
 */
export const asyncCallStatus = (state = { isFetching: false, error: false }, action) => {
  switch (action.type) {

    case ASYNC_FETCH:
      return Object.assign({}, state, { isFetching: true, error: false });

    case ASYNC_FETCH_SUCCESS:
      return Object.assign({}, state, { isFetching: false, error: false });

    case ASYNC_FETCH_FAILURE:
      return Object.assign({}, state, { isFetching: false, error: true });

    default:
      return state;

  }
};
