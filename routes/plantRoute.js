const express = require('express');
const plantRoutes = express.Router();
const plantController = require('../controllers/userController');

plantRoutes.get('/', plantController.index)

plantRoutes.get('/:plantId', plantController.viewOnePlant)


module.exports = plantRoutes