/*
Author: Jose Angel Garcia Gomez
Date: 13-04-2023
Description: Program that defines the routes and the controller to be used for each route
*/

const express = require("express");
const router = express.Router();
const SampleController = require("../controllers/sample-controller");

router.route('/')
	.get(SampleController.getSample)
	.post(SampleController.postSample)

router.route('/extendedPath')
	.get(SampleController.getSampleExtendedPath)

router.route('/parameter/:id')
	.get(SampleController.getSampleParameter)

module.exports = router;