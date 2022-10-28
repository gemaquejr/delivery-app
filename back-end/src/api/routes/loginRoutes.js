const express = require('express');

const { Router } = express;

const loginRoutes = Router();

loginRoutes.get('/login', (_req, res) => res.status(200).json({ message: 'ok ' }));

module.exports = loginRoutes;