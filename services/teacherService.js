const teacherModel=require("../models/teacherModel")

module.exports={
        createteacher : async function(body){
        // body.password=await bcrypt.hashSync(body.password,10);
        const data= await teacherModel.createteacher(body);
        return data;
    },
}