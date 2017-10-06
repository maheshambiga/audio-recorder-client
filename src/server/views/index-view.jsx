//
// This is the server side entry point for the React app.
//

import ReduxRouterEngine from 'electrode-redux-router-engine';
import { routes } from '../../client/routes';
import configureStore from './../../client/configureStore';

const Promise = require('bluebird');

const createStorePromise = (initialState) => {
  const store = configureStore(initialState);
  return Promise.resolve(store);
};

function createReduxStore(req, match) { // eslint-disable-line

  const params = match.renderProps.params;
  const components = match.renderProps.components;
  const Comp = components[components.length - 1].WrappedComponent;
  const fetchData = (Comp && Comp.fetchData) || (() => Promise.resolve());

  const storePromise = createStorePromise();

  return new Promise((resolve) => {
    storePromise.then(store => {
        fetchData({ store, params }).then((res) => {
          resolve(store);
        });
      },
    );
  });

}

//
// This function is exported as the content for the webapp plugin.
//
// See config/default.json under plugins.webapp on specifying the content.
//
// When the Web server hits the routes handler installed by the webapp plugin, it
// will call this function to retrieve the content for SSR if it's enabled.
//
//

module.exports = (req) => {
  const app = req.server && req.server.app || req.app;

  if (!app.routesEngine) {
    app.routesEngine = new ReduxRouterEngine({ routes, createReduxStore });
  }

  return app.routesEngine.render(req);
};
