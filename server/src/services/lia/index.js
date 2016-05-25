'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'lia.db'),
    autoload: true
  });

  let options = {
    Model: db,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/lia', service(options));

  // Get our initialize service to that we can bind hooks
  const liaService = app.service('/lia');

  // Set up our before hooks
  liaService.before(hooks.before);

  // Set up our after hooks
  liaService.after(hooks.after);

  // create test LIA
  liaService.create({
    "_id":"1",
    "title":"Test LIA 1",
    "short_description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis expedita facilis fugit illo molestiae optio quae quo vero. Animi, officia, vitae. Alias debitis dolores expedita fugiat incidunt numquam quas, ullam.",
    "language":"javascript",
    "state":"opened",
    "time":60,
    "created_at":"2016-05-25"
  }).then(() => console.log('[LOG]: Created test LIA...'));
};
