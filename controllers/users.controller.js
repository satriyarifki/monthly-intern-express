const { Sequelize, QueryTypes } = require('sequelize');
const { connectProduction } = require('../config/connections');
const { users_role, users_added, v_login_user, roles } = require('../models');
var crypto = require("crypto-js");
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
exports.storeNewUser = async (req, res) => {
	try {
		const userRole = { nik: req.body.lg_nik, roleId: req.body.roleId };
		delete req.body.roleId;
		let newUser = req.body;
		newUser.lg_password =  crypto.MD5(newUser.lg_password).toString() 
		console.log(userRole);
		console.log(newUser);
		await users_added.create(newUser);
		const response = await users_role.create(userRole);

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
