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

