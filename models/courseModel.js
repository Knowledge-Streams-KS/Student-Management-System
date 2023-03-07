
const {models}= require("../Models/definition");
module.exports={
    createcourse : async function(body){
    const result= await models.courses.create(body);
    return result;
},
}