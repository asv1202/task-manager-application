const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const db = require('./models');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use('/', routes);
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
  }));

const PORT = process.env.PORT || 3001;

db.sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return db.sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
