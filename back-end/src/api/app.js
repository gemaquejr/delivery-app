const express = require('express');
const bodyParser = require('body-parser');
const loginRoutes = require('./routes/login.routes');

const app = express();
app.use(bodyParser.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(loginRoutes);

module.exports = app;
