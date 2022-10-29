const express = require('express');
const login = require('../controllers/loginController');

const { Router } = express;

const loginRoutes = Router();

loginRoutes.post('/login', login);

module.exports = loginRoutes;