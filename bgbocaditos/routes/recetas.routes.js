var express = require('express');
var router = express.Router();

/* GET users listing. */

const recetasController = require("../controllers/recetas.controller.js");

router.get('/', recetasController.findAll);

module.exports = router;