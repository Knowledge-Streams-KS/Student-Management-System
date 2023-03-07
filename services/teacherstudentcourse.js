const teacherstudentcourseModel=require("../models/teacherstudentcourse")

module.exports={
    createTeacherStudentCourse : async function(body){
        // body.password=await bcrypt.hashSync(body.password,10);
        const data= await teacherstudentcourseModel.createTeacherStudentCourse(body);
        return data;
    },
}