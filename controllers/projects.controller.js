const { Sequelize, QueryTypes } = require("sequelize");
const { connectProduction } = require("../config/connections");
const { projects } = require("../models");
const Op = Sequelize.Op;

exports.index = async (req, res) => {
  try {
      
    const response = await projects.findAll();
    // const response = await connectProduction.query("SELECT * FROM projects", {
    //   type: QueryTypes.SELECT,
    // });

    res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
