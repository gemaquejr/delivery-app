const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const loginRoutes = require('./routes/login.routes');
const productsRoutes = require('./routes/products.routes');
const registerRoutes = require('./routes/register.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(loginRoutes);
app.use(productsRoutes);
app.use(registerRoutes);

module.exports = app;
