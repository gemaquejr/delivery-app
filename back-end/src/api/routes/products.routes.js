const express = require('express');
const products = require('../controllers/productController');

const { Router } = express;

const productsRoutes = Router();

productsRoutes.get('/products', products);

module.exports = productsRoutes;