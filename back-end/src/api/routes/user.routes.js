const express = require('express');
const userController = require('../controllers/userController');

const { Router } = express;

const userRoutes = Router();

userRoutes.get('/sellers', userController.findAllSellers);
userRoutes.get('/user/:id', userController.findUserById);

module.exports = userRoutes;