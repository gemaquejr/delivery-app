const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const loginRoutes = require('./routes/login.routes');
const productsRoutes = require('./routes/products.routes');
const registerRoutes = require('./routes/register.routes');
const salesRoutes = require('./routes/sales.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.get('/coffee', (_req, res) => res.status(418).end());
app.use(loginRoutes);
app.use(productsRoutes);
app.use(registerRoutes);
app.use(salesRoutes);

module.exports = app;
