const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_login_user', {
    lg_nik: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lg_password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lg_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lg_email_aio: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.CHAR(11),
      allowNull: true
    },
    n_photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lg_location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'v_login_user',
    timestamps: false
  });
};
