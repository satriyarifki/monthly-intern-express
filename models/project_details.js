const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const Projects = sequelize.define('projects', { timestamps: true });
  const Project_details = sequelize.define(
    "project_details",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        references: {
          model: "projects",
          key: "id",
        },
      },
      feature: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      update: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      status: {
				type: DataTypes.ENUM(['Undone', 'Ongoing', 'Done']),
				defaultValue: 'User',
			},
      doc: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "project_details",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "FK__projects",
          using: "BTREE",
          fields: [{ name: "projectId" }],
        },
      ],
    }
  );
  Project_details.belongsTo(Projects)
  return Project_details
};
