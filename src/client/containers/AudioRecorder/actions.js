import axios from 'axios';
import * as constants from './constants';
import {UPLOAD_STORY_API} from './../../appConstants';
export const addStoryRequest = () => {
  return {
    type: constants.ADD_STORY_REQUEST,
  };
};

export const addStorySuccess = (res) => {
  return {
    type: constants.ADD_STORY_SUCCESS,
    res,
  };
};

export const addStoryFailure = (res) => {
  return {
    type: constants.ADD_STORY_FAILURE,
    res,
  };
};
export const invalidateAddStory = () => {
  return {
    type: constants.INVALIDATE_ADD_STORY
  };
};

const blobToBase64 =(blob, cb) => {
  const reader = new FileReader();
  reader.onload = function () {
    const dataUrl = reader.result;
    const base64 = dataUrl.split(',')[1];
    cb(base64);
  };
  reader.readAsDataURL(blob);
};

export const addStoryAPI = (data) => {
  const {blob, storyName, genre} = data;

  return new Promise((resolve ,reject)=>{
    blobToBase64(blob, (base64)=>{
      axios({
        method: 'post',
        url: UPLOAD_STORY_API,
        data:{blob: base64, storyName, genre}
      }).then((res)=>{resolve(res)}).catch((err)=>{reject(err)})
    });
  });

};

export const addStory = (params)=> {
  return (dispatch)=>{
    dispatch(addStoryRequest());
    addStoryAPI(params).then((res) => {
      if (res.data.success === true) {
        dispatch(addStorySuccess(res));
      }

    }).catch((err) => {
      dispatch(addStoryFailure(err));
      console.warn('Error while adding the story.', err);
    });
  }
};

