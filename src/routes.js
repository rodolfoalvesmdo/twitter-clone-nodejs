const express = require('express');
const routes = express.Router();

const PruController = require('./controllers/PruController');
const LikeController = require('./controllers/LikeController');

routes.get('/prus', PruController.index);
routes.post('/prus', PruController.store);
routes.post('/likes/:id', LikeController.store);

module.exports = routes;