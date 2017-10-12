import { LOCATION_CHANGE } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { registerUser } from "./../containers/Register/reducers";
import { loginUser } from "./../containers/Login/reducers";
import { asyncCallStatus } from './../containers/AsyncFetch/reducers';
import { authInfo } from "./../containers/App/reducers";
import { userProfile } from "./../containers/UserProfile/reducers";
import {stories} from './../containers/Dashboard/reducers';
import {viewStory} from './../containers/ViewStory/reducers';
import {addStory} from './../containers/AudioRecorder/reducers';
/**
 * Merge route into the global application state
 * @param state
 * @param action
 * @returns {*}
 */
const routeInitialState = { locationBeforeTransitions: null };

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return Object.assign({}, state, { locationBeforeTransitions: action.payload });
    default:
      return state;
  }
}

export default combineReducers({
  registerUser,
  authInfo,
  loginUser,
  userProfile,
  stories,
  viewStory,
  addStory,
  asyncCallStatus,
  form: formReducer,
  route: routeReducer
});
