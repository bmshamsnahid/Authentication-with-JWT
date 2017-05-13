var base = process.env.PWD;
var express = require('express');
var router = express.Router();
var userController = require(base + '/app/controllers/userController/user');
var authenticateController = require(base + '/app/controllers/authenticationController/authenticate');


router.get('/users', authenticateController.checkAuthentication, userController.getUsers);
router.post('/user', userController.createUser);
router.post('/authenticate', authenticateController.authenticateUser);

module.exports = router;