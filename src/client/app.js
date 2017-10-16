// This is the client side entry point for the React app.
//
import React from 'react';
import { render } from 'react-dom';
//
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

/*Style sheets*/
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';

import './assets/styles/app.css';
import './assets/styles/fonts.css';
import './assets/styles/layout.css';
import './assets/styles/singles.css';
import './assets/styles/flexHelper.css';
import './assets/styles/icons.css';
import './assets/styles/buttons.css';



import configureStore from './configureStore';
import { routes } from './routes';

//
// Add the client app start up code to a function as window.webappStart.
// The webapp's full HTML will check and call it once the js-content
// DOM is created.
//
/*require.ensure(
  ['./sw-registration'],
  require => {
    require('./sw-registration')(notify);
  },
  'sw-registration',
);*/
//
const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.route; // or state.route

    if (!routingState !== prevRoutingState) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState;
    }

    return prevRoutingStateJS;
  };
};

window.webappStart = () => {
  const initialState = window.__PRELOADED_STATE__;
  const store = configureStore(initialState);
  /*TODO - check why react-router-redux is not working*/
  const history = syncHistoryWithStore(browserHistory, store, { selectLocationState });

  return render(<Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>, document.querySelector('.js-content'));

};
