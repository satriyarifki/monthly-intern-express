require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: null,
    database: "monthly_report_intern",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "+07:00",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "iot_prod",
    password: "123456",
    database: "monthly_report_intern",
    host: "192.168.9.47",
    port: "3306",
    dialect: "mysql",
    timezone: "+07:00",
  },
};
