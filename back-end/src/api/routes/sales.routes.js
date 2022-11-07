const express = require('express');
const salesController = require('../controllers/salesController');

const { Router } = express;

const salesRoutes = Router();

salesRoutes.post('/sales', salesController.newSale);
salesRoutes.get('/sales/', salesController.findAllSales);
salesRoutes.get('/sales/:id', salesController.findSale);

module.exports = salesRoutes;