const { Router } = require('express');
const { name, version } = require('../../package.json');

// route imports
const routesV1Category = require('./v1/category');
const routesV1Post = require('./v1/post');

module.exports = (app) => {
  // greetings message
  app.get('/', (req, res, next) => {
    res.send({ name, version });
  });

  //v1 Routes
  const routesV1 = Router();
  routesV1Category(routesV1);
  routesV1Post(routesV1);

  app.use('/v1', routesV1);
};
