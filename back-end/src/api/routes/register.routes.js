const express = require('express');
const register = require('../controllers/registerController');

const { Router } = express;

const registerRoutes = Router();

registerRoutes.post('/register', register.createRegister);

module.exports = registerRoutes;