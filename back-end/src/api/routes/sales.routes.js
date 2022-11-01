const express = require('express');
const salesController = require('../controllers/salesController');

const { Router } = express;

const salesRoutes = Router();

salesRoutes.post('/sales', salesController.newSale);

module.exports = salesRoutes;