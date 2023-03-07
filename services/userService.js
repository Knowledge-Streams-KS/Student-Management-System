const userModel=require("../models/userModel")

module.exports={
        createuser : async function(body){
        // body.password=await bcrypt.hashSync(body.password,10);
        const data= await userModel.createuser(body);
        return data;
    },
    getUsers : async function(){
        const data= await userModel.getuser();
        return data;
    },
    updateuser : async function(body){
        const data= await userModel.updateuser(body);
        return data;
    },
    getuserbyid : async function(ids){
        const data= await userModel.getuserbyid(ids);
        return data;
    },
    removeuser : async function(ids){
        const data= await userModel.removeuser(ids);
        return data;
    }
        
}