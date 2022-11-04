const express = require('express');
const login = require('../controllers/loginController');

const { Router } = express;

const loginRoutes = Router();

loginRoutes.post('/login', login.login);
loginRoutes.get('/login/validate', login.validate);

module.exports = loginRoutes;