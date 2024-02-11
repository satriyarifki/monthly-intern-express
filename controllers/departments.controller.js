const { Sequelize, QueryTypes } = require('sequelize');
const { connectProduction } = require('../config/connections');
const { departments } = require('../models');
const Op = Sequelize.Op;

exports.index = async (req, res) => {
	try {
		const response = await departments.findAll();

		res.status(200).json(response);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};