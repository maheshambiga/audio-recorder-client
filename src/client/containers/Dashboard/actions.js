import axios from 'axios';
import * as constants from './constants';

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
    url: `http://localhost:3000/api/v1/getGenre`,
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