const express = require('express');

const routes = express.Router();

const IncidentController = require('./controllers/IncidentController');
const NgoController = require('./controllers/NgoController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionController.store);

routes.get('/ngos', NgoController.index);
routes.post('/ngos', NgoController.store);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;