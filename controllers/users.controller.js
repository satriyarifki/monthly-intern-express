const { Sequelize, QueryTypes } = require('sequelize');
const { connectProduction } = require('../config/connections');
const { users_role, v_login_user,roles } = require('../models');
const Op = Sequelize.Op;

exports.index = async (req, res) => {
	try {
		const response = await v_login_user.findAll();

		res.status(200).json(response);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};
exports.indexUserRole = async (req, res) => {
	try {
		const response = await users_role.findAll();

		res.status(200).json(response);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};
exports.indexRoles = async (req, res) => {
	try {
		const response = await roles.findAll();

		res.status(200).json(response);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

exports.storeUserRole = async (req, res) => {
	try {
		const response = await users_role.create(req.body);

		res.status(200).json(response);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

exports.deleteUserRole = async (req, res) => {
	try {
		const id = req.params.id;
		let data = await users_role.findOne({
			where: {
				id: id,
			},
		});

		if (!data) {
			res.status(203).json({ message: 'Data is not found!' });
		}

		const response = await users_role.destroy({
			where: {
				id: id,
			},
		});

		res.status(200).json(response);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};
