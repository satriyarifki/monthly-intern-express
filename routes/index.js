var express = require('express');
var router = express.Router();
const projectController = require('./../controllers/projects.controller');
const projectDetailsController = require('./../controllers/project_details.controller');
const usersController = require('./../controllers/users.controller');
const departmentsController = require('./../controllers/departments.controller');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

// Project
router.get('/projects', projectController.index);
router.get('/projects/:id', projectController.indexById);
router.get('/projects-details', projectDetailsController.index);
router.post('/projects', projectController.store);
router.put('/projects', projectController.update);
router.delete('/projects/:id', projectController.delete);

// Project Details
router.get('/project-details', projectDetailsController.index);
router.post('/project-details', projectDetailsController.store);
router.put('/project-details', projectDetailsController.update);
router.delete('/project-details/:id', projectDetailsController.delete);


// Users
router.get('/users', usersController.index);
router.get('/users-role', usersController.indexRole);

// Department
router.get('/departments', departmentsController.index);

module.exports = router;
