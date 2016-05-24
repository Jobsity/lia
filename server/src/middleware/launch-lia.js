'use strict';

const auth = require('feathers-authentication').hooks;

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions

    app.service('lia').update(req.params.lia_id, req.body)
      .then(lia => res.send({
        data: {
          state: lia.state
        }
      }))
    .catch(next);
  };
};
