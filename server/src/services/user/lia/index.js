'use strict';

const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires

  app.use('/users/:user_id/lia', {

    // load user's LIA
    get(id, params) {
      return app.service('users').get(params.user_id)
        .then(user => {
          return app.service('lia').get(id)
            .then(lia => {
              return Promise.resolve({
                data: {
                  id: lia._id,
                  time: lia.time,
                  title: lia.title,
                  short_description: lia.short_description,
                  description: lia.description,
                  language: lia.language,
                  candidate_name: user.username,
                  candidate_id: user._id,
                  state: lia.state,
                  submitted_code: lia.submitted_code
                }
              });
            });
        })
    },

    // set LIA to be "in progress"
    patch(id, data, params) {
      return app.service('users').get(params.user_id)
        .then(user => {
          return app.service('lia').patch(id, data)
            .then(lia => {
              return Promise.resolve({
                data: {
                  id: lia._id,
                  time: lia.time,
                  title: lia.title,
                  short_description: lia.short_description,
                  description: lia.description,
                  language: lia.language,
                  candidate_name: user.username,
                  candidate_id: user._id,
                  state: lia.state
                }
              });
            });
        })
    },

    // submit solution for LIA
    create(data, params) {
      return app.service('users').get(params.user_id)
        .then(() => app.service('lia').patch(data.lia_id, data).then(() => Promise.resolve('OK')));
    }
  });


  // Get our initialize service to that we can bind hooks
  const userLiaService = app.service('/users/:user_id/lia');

  // Set up our before hooks
  userLiaService.before(hooks.before);

  // Set up our after hooks
  userLiaService.after(hooks.after);
};
