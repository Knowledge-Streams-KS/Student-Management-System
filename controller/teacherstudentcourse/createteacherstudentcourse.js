const teacherstudentcourseService= require('../../services/teacherstudentcourse')

module.exports= async function(req,res){
    const data=await teacherstudentcourseService.createTeacherStudentCourse(req.body);
    res.send(data);
}