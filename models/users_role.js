const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_role', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nik: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'roles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'users_role',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "FK__roles",
        using: "BTREE",
        fields: [
          { name: "roleId" },
        ]
      },
    ]
  });
};
