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
                  candidate_name: user.first_name + ' ' + user.last_name,
                  candidate_id: user._id,
                  state: lia.state,
                  snippet_code: lia.snippet_code,
                  submitted_code: lia.submitted_code,
                  submitted_at: lia.submitted_at
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
                  candidate_name: user.first_name + ' ' + user.last_name,
                  candidate_id: user._id,
                  state: lia.state,
                  snippet_code: lia.snippet_code
                }
              });
            });
        })
    },

    // submit solution for LIA
    create(data, params) {
      return app.service('users').get(params.user_id)
        .then(() => app.service('lia').patch(data.id, data).then(() => Promise.resolve('OK')));
    }
  });


  // Get our initialize service to that we can bind hooks
  const userLiaService = app.service('/users/:user_id/lia');
  
  // add submitted_at date
  userLiaService.before({
    create(hook) {
      hook.data.submitted_at = new Date();
    }
  });

  // Set up our before hooks
  userLiaService.before(hooks.before);

  // Set up our after hooks
  userLiaService.after(hooks.after);
};
