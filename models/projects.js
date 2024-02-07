const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projects', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    deptId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'departments',
        key: 'id'
      }
    },
    userRoleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users_role',
        key: 'id'
      }
    },
    appName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    progress: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'projects',
    timestamps: true,
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
        name: "FK_projects_departments",
        using: "BTREE",
        fields: [
          { name: "deptId" },
        ]
      },
      {
        name: "FK_projects_users_role",
        using: "BTREE",
        fields: [
          { name: "userRoleId" },
        ]
      },
    ]
  });
};
