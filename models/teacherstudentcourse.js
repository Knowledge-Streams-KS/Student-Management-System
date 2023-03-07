const {models}= require("../Models/definition");
module.exports={
    createTeacherStudentCourse : async function(body){
    const result= await models.teacherstudentcourse.create(body);
    return result;
}
}