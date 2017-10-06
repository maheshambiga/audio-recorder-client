import { ASYNC_FETCH, ASYNC_FETCH_FAILURE, ASYNC_FETCH_SUCCESS } from './constants';

/* *
 * Action sets a loader to be shown on page
 * */
export const asyncFetch = () => {
  return {
    type: ASYNC_FETCH
  };
};

/* *
 * Action clears the loader on the page.
 * */
export const asyncFetchSucess = () => {
  return {
    type: ASYNC_FETCH_SUCCESS
  };
};

/* *
 * Action displays API error on the page.
 * */
export const asyncFetchFalied = () => {
  return {
    type: ASYNC_FETCH_FAILURE
  };
};
