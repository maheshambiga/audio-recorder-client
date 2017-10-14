
import * as constants from './constants';

export const toggleMenu = (flag) => {
  return{
    type:constants.TOGGLE_MENU,
    flag
  }
};
export const setActivePage = (activePage) => {
  return{
    type:constants.SET_ACTIVE_PAGE,
    activePage
  }
};

