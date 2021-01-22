var express = require('express');
var router = express.Router();

/* GET users listing. */

const tutorialesController = require("../controllers/tutoriales.controller.js");

router.get('/', tutorialesController.findAll);

module.exports = router;