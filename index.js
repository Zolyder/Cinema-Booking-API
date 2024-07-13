'use strict';

const express = require('express');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes');
const path = require('path');

dotenv.config();
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
app.use(express.json());
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});

app.get('/test', (req, res) => {
  res.send('The API is working correctly.');
});

app.use('/api', routes);

// Serve APIDoc documentation
app.use('/api/v1/api-docs', express.static(path.join(__dirname, 'apidoc')));

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected...');
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Database connection error:', err);
  }
};

if (require.main === module) {
  startServer();
}

module.exports = app; // Export the app for testing
