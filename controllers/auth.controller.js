var crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
const { Sequelize, QueryTypes } = require("sequelize");
const { connectEmployee } = require("../config/connections");
const { v_login_user } = require("../models");

exports.login = async (req, res) => {
  try {
    const { nik, password } = req.body;
    console.log(nik + ' ' + password);
    const user = await v_login_user.findOne({
      attributes: { exclude: ["id"] },
      where: { lg_nik: nik },
    });

    if (user) {
      let hash = crypto.MD5(password).toString();

      //if password is the same
      //generate token with the user's id and the secretKey in the env file

      if (user.lg_password == hash) {
        let token = jwt.sign({ id: user.lg_nik }, process.env.secretKey, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

        // res.cookie('jwt', token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        return res.status(200).json({ token: token, user: user });
        // apiResponse.sucess(res, {access_token: token, user: user}, 200);
      } else {
        return res.status(401).json("Authentication Invalid");
      }
    } else {
      return res.status(401).json("User Not Found");
      // apiResponse.error(res, 'Authentication failed', 401);
    }
    // res.status(200).json(user);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

// exports.log = async (req, res) => {
//   try {
//     const response = await v_login_user.findAll({attributes: {exclude: ['id']}, where:{lg_nik: '18180'}});

//     res.status(200).json(response);

//     // });
//   } catch (e) {
//     return res.status(500).json({ error: e.message });
//   }
// };
