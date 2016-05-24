'use strict';
const authentication = require('./authentication');
const user = require('./user');
const lia = require('./lia');

module.exports = function() {
  const app = this;
  
  
  app.configure(authentication);
  app.configure(user);
  app.configure(lia);
};
