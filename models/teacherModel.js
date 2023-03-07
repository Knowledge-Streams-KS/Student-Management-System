const {models}= require("../Models/definition");
const {createuser} = require("../models/userModel")
module.exports={
    createteacher: async function(body){
        var userData={
            Name: body.Name,
            email: body.email,
            phoneNumber: body.phoneNumber,
            password: body.password
        }
        var teacherdata={
            teacherid : body.teacherid,
            officeLocation : body.officeLocation,
            deptName : body.deptName
        }
        const user= await createuser(userData);
        teacherdata={...teacherdata, userId: user.id}

        const result= await models.teacher.create(teacherdata);
        return result;
},
}