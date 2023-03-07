const studentService= require('../../services/studentService')

module.exports= async function(req,res){
    const data=await studentService.createstudent(req.body);
    res.send(data);
}