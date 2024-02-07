var DataTypes = require("sequelize").DataTypes;
var _v_login_user = require("./v_login_user");

function initModels(sequelize) {
  var v_login_user = _v_login_user(sequelize, DataTypes);


  return {
    v_login_user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
