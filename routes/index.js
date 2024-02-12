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
router.get('/projects', projectController.index);
router.get('/projects/:id', projectController.indexById);
router.get('/projects-details', projectDetailsController.index);
router.post('/projects', projectController.store);
router.put('/projects', projectController.update);
router.delete('/projects/:id', projectController.delete);
router.get('/users', usersController.index);
router.get('/users-role', usersController.indexRole);
router.get('/departments', departmentsController.index);

module.exports = router;
