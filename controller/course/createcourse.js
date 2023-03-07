const courseService= require('../../services/courseService')

module.exports= async function(req,res){
    const data=await courseService.createcourse(req.body);
    res.send(data);
}