/*eslint-env es6*/
const pwaPlugin = {};

pwaPlugin.register = function (server, options, next) {
  server.route({
    method: 'GET',
    path: '/sw.js',
    handler: {
      file: 'dist/sw.js'
    }
  });
  next();
};

pwaPlugin.register.attributes = {
  name: 'PWAPlugin',
  version: '0.0.1'
};

module.exports = pwaPlugin;
