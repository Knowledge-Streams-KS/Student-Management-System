var express = require('express');
var router = express.Router();

/* GET users listing. */
const {createTeacherStudentCourse}= require("../controller/index");

router.post("/createTeacherStudentCourse", createTeacherStudentCourse);
module.exports = router;