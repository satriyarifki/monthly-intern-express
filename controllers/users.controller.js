const { Sequelize, QueryTypes } = require('sequelize');
const { connectProduction } = require('../config/connections');
const { users_role, v_login_user } = require('../models');
const Op = Sequelize.Op;

exports.index = async (req, res) => {
	try {
		const response = await v_login_user.findAll({
			attributes: {
				exclude: ['id'],
            },
            
		});

		res.status(200).json(response);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};
