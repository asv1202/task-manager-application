const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const db = require('./models');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use('/', routes);

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
