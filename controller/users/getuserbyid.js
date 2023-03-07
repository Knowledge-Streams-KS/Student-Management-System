const userService= require('../../services/userService')

module.exports= async function(req,res){
    const data= await userService.getuserbyid(req.query.ids);
    res.send(data);
}