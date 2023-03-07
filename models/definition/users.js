const { Sequelize, Model,DataTypes} = require("sequelize");
let sequelize = require("../../common/dbConnection");
class users extends Model{

}
users.init(
    {
    id :{
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
        type : DataTypes.INTEGER(),
    },
   Name:{
        
        allowNull : false,
        type : DataTypes.STRING(),
    },
    email:{
        unique : true,
        allowNull : false,
        type : DataTypes.STRING(),
    },
    phoneNumber:{
        unique : true,
        allowNull : false,
        type :  DataTypes.STRING(),
    },
    password:{
       
        allowNull : false,
        type :  DataTypes.STRING(),
    },

},
{
    timeStamps :true,
    paranoid : true,
    sequelize : sequelize,
    modelName: "users"
},
);
module.exports= users;