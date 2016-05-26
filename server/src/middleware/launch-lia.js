'use strict';

const auth = require('feathers-authentication').hooks;

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions

    app.service('users').get(req.params.user_id)
      .then(user => {
        app.service('lia').patch(req.params.lia_id, req.body)
          .then(lia => res.send({
            data: {
              id: lia._id,
              time: lia.time,
              title: lia.title,
              short_description: lia.short_description,
              language: lia.language,
              candidate_name: user.username,
              candidate_id: user._id,
              state: lia.state
              }
          }));
      })
      .catch(next);
  };
};
