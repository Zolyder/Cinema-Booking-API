'use strict';
const express = require('express');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
const routes = require('./routes');

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});

app.get('/test', (req, res) => {
  res.send('The API is working correctly.');
});

app.use('/api', routes);

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

startServer();