var express = require("express");
var router = express.Router();
const projectController = require("./../controllers/projects.controller");
const projectDetailsController = require("./../controllers/project_details.controller");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/projects", projectController.index);
router.get("/projects-details", projectDetailsController.index);

module.exports = router;
