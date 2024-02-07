const Sequelize = require("sequelize");
const config = require("./config");

const connectProduction = new Sequelize(
  config.production.database,
  config.production.username,
  config.production.password,
  config.production
);

module.exports = {
  connectProduction,
};
