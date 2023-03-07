const studentModel=require("../models/studentModel")

module.exports={
        createstudent : async function(body){
        // body.password=await bcrypt.hashSync(body.password,10);
        const data= await studentModel.createstudent(body);
        return data;
    },
    getStudent: async function(){
        const data= await studentModel.getStudent();
        return data;
    },
    getstudentbyid: async function(ids){
        const data= await studentModel.getstudentbyid(ids);
        return data;
    },
}