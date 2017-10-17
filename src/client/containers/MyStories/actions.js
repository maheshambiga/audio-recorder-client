import axios from 'axios';
import * as constants from './constants';
import {MY_STORIES_API} from './../../appConstants';
export const getMyStoriesRequest = () => {
  return {
    type: constants.GET_MY_STORIES_REQUEST,
  };
};

export const getMyStoriesSuccess = (res) => {
  return {
    type: constants.GET_MY_STORIES_SUCCESS,
    res,
  };
};

export const getMyStoriesFailure = (res) => {
  return {
    type: constants.GET_MY_STORIES_FAILURE,
    res,
  };
};
export const invalidateGetMyStories = () => {
  return {
    type: constants.INVALIDATE_GET_MY_STORIES
  };
};


export const getMyStoriesAPI = (genre) => {
  return axios({
    method: 'get',
    url: MY_STORIES_API,
    params:{genre}
  });
};

export const getMyStories = (genre)=> {
  return (dispatch)=>{
    dispatch(getMyStoriesRequest());
    getMyStoriesAPI(genre).then((res) => {
      if (res.data.success === true) {
        dispatch(getMyStoriesSuccess(res));
      }

    }).catch((err) => {
      dispatch(getMyStoriesFailure(err));
      console.warn('Error while fetching stories.', err);
    });
  }
};

export const updateFilterType = (genre) => {
  return{
    type: constants.SET_FILTER_TYPE,
    genre
  }
};