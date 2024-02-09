const { Sequelize, QueryTypes } = require('sequelize');
const { connectProduction } = require('../config/connections');
const { projects, departments, users_role, project_details } = require('../models');
const Op = Sequelize.Op;

exports.index = async (req, res) => {
	try {
		const response = await projects.findAll({ include: [{ model: departments }, { model: users_role }] });
		// const response = await connectProduction.query("SELECT * FROM projects", {
		//   type: QueryTypes.SELECT,
		// });

		res.status(200).json(response);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};
exports.indexById = async (req, res) => {
	try {
		const { id } = req.params;
		const response = await projects.findOne({ include: [{ model: departments }, { model: users_role }, { model: project_details }], where: { id: id } });
		// const response = await connectProduction.query("SELECT * FROM projects", {
		//   type: QueryTypes.SELECT,
		// });

		res.status(200).json(response);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};
