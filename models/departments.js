const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const Projects = sequelize.define("projects", { timestamps: true });
  const Departments = sequelize.define(
    "departments",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      department_name: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      is_active: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "departments",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );
  Departments.hasMany(Projects);
  return Departments;
};
