const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

// define NODE_ENV
const nodeEnvironment = process.env.NODE_ENV || 'development';

// Port environment definition
const port = process.env.PORT || 4000;

// Starting app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (nodeEnvironment === 'development') {
  app.use(morgan('dev')); // Logs HTTP Requests
}

// Routes
const router = require('./routes');
router(app);

app.listen(port, () => {
  console.log(`🚀 Server starded at http://localhost:${port}`);
});

module.exports = app;
