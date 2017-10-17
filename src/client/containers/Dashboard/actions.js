import axios from 'axios';
import * as constants from './constants';
import {GET_GENRE_API} from './../../appConstants';
export const getStoriesRequest = () => {
  return {
    type: constants.GET_STORIES_REQUEST,
  };
};

export const getStoriesSuccess = (res) => {
  return {
    type: constants.GET_STORIES_SUCCESS,
    res,
  };
};

export const getStoriesFailure = (res) => {
  return {
    type: constants.GET_STORIES_FAILURE,
    res,
  };
};
export const invalidateGetStories = () => {
  return {
    type: constants.INVALIDATE_GET_STORIES
  };
};


export const getStoriesAPI = (genre) => {
  return axios({
    method: 'get',
    url: GET_GENRE_API,
    params:{genre}
  });
};

export const getStories = (genre)=> {
  return (dispatch)=>{
    dispatch(getStoriesRequest());
    getStoriesAPI(genre).then((res) => {
      if (res.data.success === true) {


      }
      dispatch(getStoriesSuccess(res));
    }).catch((err) => {
      dispatch(getStoriesFailure(err));
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