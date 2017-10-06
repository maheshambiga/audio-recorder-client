import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from './promiseMiddleWare';
import rootReducer from './reducers';

const store = (initialState = {}) => createStore(rootReducer, initialState, composeWithDevTools(
  applyMiddleware(thunkMiddleware, promiseMiddleware, routerMiddleware(browserHistory)),
));

export default store;
