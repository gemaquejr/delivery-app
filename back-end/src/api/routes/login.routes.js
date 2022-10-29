const express = require('express');
const login = require('../controllers/loginController');

const { Router } = express;

const loginRoutes = Router();

loginRoutes.get('/login', login);

module.exports = loginRoutes;