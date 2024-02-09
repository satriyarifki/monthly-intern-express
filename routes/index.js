var express = require('express');
var router = express.Router();
const projectController = require('./../controllers/projects.controller');
const projectDetailsController = require('./../controllers/project_details.controller');
const usersController = require('./../controllers/users.controller');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});
router.get('/projects', projectController.index);
router.get('/projects/:id', projectController.indexById);
router.get('/projects-details', projectDetailsController.index);
router.get('/users', usersController.index);

module.exports = router;
