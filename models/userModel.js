
const {models}= require("../Models/definition");
module.exports={
    createuser : async function(body){
    const result= await models.users.create(body);
    return result;
},
getuser : async function(){
    const result= await models.users.findAll();
    return result;
},
updateuser: async function(body){
    // console.log(body.id);
    // return body.id;
    const result= await models.users.update(
        {
            ...body
        },
        {
            where : {id : body.id}
        }
    );
    return result;
},
getuserbyid : async function(ids){
    const result= await models.users.findAll( {
        where : {id : ids},
    });
    return result;
},
removeuser: async function(ids){
    const result= await models.users.destroy(
        {
            where : {id : ids},
        });
    if(result) {
        return "success"
    }
    return "fail";
},
    
}