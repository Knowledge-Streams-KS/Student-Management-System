
const {models}= require("../models/definition");
const {createuser} = require("../models/userModel")

module.exports={
    createstudent : async function(body){
        var userData={
            Name: body.Name,
            email: body.email,
            phoneNumber: body.phoneNumber,
            password: body.password
        }
        var studentData={
            rollNo: body.rollNo,
            semester: body.semester,
            deptName: body.deptName
        }

        const user= await createuser(userData);
        studentData={...studentData, userId: user.id}

        const result= await models.students.create(studentData);
        return result;
    },

    getStudent : async function(){
    const result= await models.students.findAll({ 
        include: {
            model: models.users
        }
    });
    return result;
},
getstudentbyid : async function(ids){
    const result= await models.students.findAll( {
        where : {studentid : ids},
    });
    return result;
},
// updateStudents: async function(body){
//     // console.log(body.id);
//     // return body.id;
//     const result= await models.students.update(
//         {
//             ...body
//         },
//         {
//             where : {id : body.id}
//         }
//     );
//     return result;
// },
// getuserbyid: async function(ids){
//     const result= await models.users.findAll({
//         where : {id : ids},
//     });
//     return result;
// },
// removestudent: async function(ids){
//     const result= await models.users.destroy(
//         {
//             where : {id : ids},
//         });
//     if(result) {
//         return "success"
//     }
//     return "fail";
// },
}