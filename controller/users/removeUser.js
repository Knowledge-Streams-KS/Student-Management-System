const userService= require('../../services/userService')

module.exports= async function(req,res){
    const data=await userService.removeuser(req.query.ids)
    res.send(data);
}