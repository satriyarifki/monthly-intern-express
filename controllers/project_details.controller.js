const { Sequelize, QueryTypes } = require("sequelize");
const { connectProduction } = require("../config/connections");
const { project_details } = require("../models");
const Op = Sequelize.Op;

exports.index = async (req, res) => {
  try {
      
    const response = await project_details.findAll();
    // const response = await connectProduction.query("SELECT * FROM projects", {
    //   type: QueryTypes.SELECT,
    // });

    res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

exports.store = async (req, res) => {
	try {
		const response = await project_details.create(req.body);

		res.status(200).json(response);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};
exports.update = async (req, res) => {
	try {
		const response = await project_details.update(req.body, { where: { id: req.body.id } });

		res.status(200).json(response);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};
exports.delete = async (req, res) => {
	try {
		const id = req.params.id;
		let data = await project_details.findOne({
			where: {
				id: id,
			},
		});

		if (!data) {
			res.status(203).json({ message: 'Data is not found!' });
		}

		const response = await project_details.destroy({
			where: {
				id: id,
			},
		});

		res.status(200).json(response);
	} catch (e) {
		return res.status(500).json({ error: e.message });
	}
};

