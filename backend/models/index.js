const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize("postgres://postgres:actyv@localhost:5433/task-manager", {
  dialect: 'postgres',
  logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, DataTypes);
db.Task = require('./task')(sequelize, DataTypes);

db.User.hasMany(db.Task, { foreignKey: 'userId' });
db.Task.belongsTo(db.User, { foreignKey: 'userId' });

module.exports = db;
