var express = require('express');
var router = express.Router();

/* GET users listing. */
const {createstudent}= require("../controller/index");
const { getStudent}= require("../controller/index");
// const {  updateStudents}= require("../controller/index");
const { getstudentbyid}= require("../controller/index");
// const { removestudent}= require("../controller/index");


router.post("/createstudent", createstudent);
router.get("/getStudent", getStudent );
// router.put("/updatestudents", updateStudents);
router.get("/getstudentbyid", getstudentbyid);
// router.delete("/removestudent", removestudent );

module.exports = router;