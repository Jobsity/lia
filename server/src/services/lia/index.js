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
    "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, aliquid architecto consequatur culpa cum debitis eligendi fuga fugiat ipsa iste laboriosam maxime nisi obcaecati quia? Adipisci eveniet hic molestias repudiandae! Asperiores assumenda autem distinctio ea est facere hic molestias perferendis? Corporis eligendi minima repellat? Deleniti dolorem eveniet, facilis incidunt inventore iure molestiae necessitatibus nobis. Autem distinctio dolore earum, eligendi et eum exercitationem hic illum in incidunt iure, magnam molestiae, nesciunt quasi vel. Ad alias aliquam asperiores dignissimos ex, hic maxime molestias perferendis provident quidem ratione recusandae, sapiente sequi suscipit unde. Aliquam autem commodi debitis dolorem doloribus ea earum, enim excepturi facilis id illum impedit incidunt ipsa itaque libero nisi non odit placeat possimus reiciendis repellat repellendus sed tempore tenetur vel velit voluptatem voluptatum. A aliquid corporis nobis, quasi reiciendis veritatis voluptate? Aut consectetur ea excepturi expedita mollitia neque officiis omnis praesentium reiciendis repellat? Dolores eveniet hic incidunt voluptatibus voluptatum. Commodi dolores illum labore nisi, officiis perspiciatis quaerat sit tempore veniam veritatis? A amet consectetur incidunt nulla officia officiis praesentium ratione, sapiente soluta suscipit ut voluptatibus voluptatum! Aliquid aperiam assumenda debitis ducimus, enim facilis fuga fugiat harum, impedit inventore laborum minima nam non perferendis quasi sint tenetur, voluptate! Quia, voluptatibus.",
    "language":"javascript",
    "state":"opened",
    "time":60,
    "created_at":"2016-05-25",
    "snippet_code": "ZnVuY3Rpb24gc29sdXRpb24oYSwgYiwgYykgew0KICAvLyBUT0RPOiBQbGVhc2Ugd3JpdGUgeW91IHNvbHV0aW9uIGluc2lkZSBvZiB0aGlzIGZ1bmN0aW9uDQogIA0KfQ=="
  }).then(() => console.log('[LOG]: Created test LIA...'));
};
