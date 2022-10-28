const express = require('express');
const loginRoutes = require('./routes/loginRoutes');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(loginRoutes);

module.exports = app;
