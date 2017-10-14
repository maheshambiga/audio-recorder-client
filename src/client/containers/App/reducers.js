import * as constants from './constants';

/**
 *
 * @param state {redirectUrl:take the user to dashboard by default}
 * @param action
 * @returns {*}
 */
export const authInfo = (state={isLoggedIn:false, token:null, redirectUrl:'/dashboard'}, action) =>{
  switch (action.type){
    case constants.SET_AUTH_INFO:
      return Object.assign({}, state, {...action.data});
    case constants.SET_APP_URL:
      return Object.assign({}, state, {redirectUrl:action.redirectUrl});
    default:
      return state;
  }
};

