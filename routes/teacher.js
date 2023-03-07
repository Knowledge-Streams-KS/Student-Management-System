var express = require('express');
var router = express.Router();

/* GET users listing. */
const {createteacher}= require("../controller/index");

router.post("/createteacher", createteacher);
module.exports = router;