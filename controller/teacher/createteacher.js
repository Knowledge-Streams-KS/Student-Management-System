const teacherService= require('../../services/teacherService')

module.exports= async function(req,res){
    const data=await teacherService.createteacher(req.body);
    res.send(data);
}