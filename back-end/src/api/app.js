const express = require('express');
// const bodyParser = require('body-parser');
const loginRoutes = require('./routes/login.routes');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(loginRoutes);

module.exports = app;
