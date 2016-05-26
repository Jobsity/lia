'use strict';

const launchLia = require('./launch-lia');

const lia = require('./lia');

const handler = require('feathers-errors/handler');
const notFound = require('./not-found-handler');
const logger = require('./logger');

module.exports = function() {
  // Add your custom middleware here. Remember, that
  // just like Express the order matters, so error
  // handling middleware should go last.
  const app = this;

  app.get('/users/:user_id/lia/:lia_id', lia(app));
  app.patch('/users/:user_id/lia/:lia_id', launchLia(app));
  
  app.use(notFound());
  app.use(logger(app));
  app.use(handler());
};
