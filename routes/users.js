var express = require('express');
var router = express.Router();

/* GET users listing. */
const {createuser}= require("../controller/index");
const { getUsers}= require("../controller/index");
const {  updateuser}= require("../controller/index");
const { getuserbyid}= require("../controller/index");
const { removeuser }= require("../controller/index");


router.post("/createuser", createuser);
router.get("/getuser",  getUsers);
router.put("/updateuser", updateuser);
router.get("/getuserbyid", getuserbyid);
router.delete("/removeuser", removeuser);

module.exports = router;
