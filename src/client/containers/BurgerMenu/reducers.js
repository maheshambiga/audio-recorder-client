import * as constants from './constants';

export const menuState = (state={isOpen:false, activePage:''}, action) => {
  switch (action.type){
    case constants.TOGGLE_MENU:
      return Object.assign({}, state, {isOpen : action.flag});
    case constants.SET_ACTIVE_PAGE:
      return Object.assign({}, state, {activePage: action.activePage});
    default:
      return state;
  }
};