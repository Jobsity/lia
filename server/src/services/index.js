'use strict';
const authentication = require('./authentication');
const user = require('./user');
const lia = require('./lia');
const userLia = require('./user/lia');

module.exports = function() {
  const app = this;
  
  app.configure(authentication);
  app.configure(user);
  app.configure(userLia);
  app.configure(lia);
};
