const courseModel=require("../models/courseModel")

module.exports={
        createcourse : async function(body){
        // body.password=await bcrypt.hashSync(body.password,10);
        const data= await courseModel.createcourse(body);
        return data;
    },
}