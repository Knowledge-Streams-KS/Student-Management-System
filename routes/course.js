var express = require('express');
var router = express.Router();

/* GET users listing. */
const {createcourse}= require("../controller/index");

router.post("/createcourse", createcourse);
module.exports = router;