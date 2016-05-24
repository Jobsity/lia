'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('lia service', function() {
  it('registered the lia service', () => {
    assert.ok(app.service('lia'));
  });
});
