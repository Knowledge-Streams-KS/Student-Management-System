const { Sequelize, Model,DataTypes} = require("sequelize");
let sequelize = require("../../common/dbConnection");

class courses extends Model{

}
User.init(
    {

    courseId :{
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
        type : DataTypes.INTEGER,
    },
    courseName:{
        
        allowNull : false,
        type : DataTypes.STRING(),
    },
    courseDescription:{
        
        allowNull : false,
        type : DataTypes.STRING(),
    },
    

},
{
    timeStamps :true,
    paranoid : true,
    sequelize : sequelize,
    modelName: "courses"
},
);
module.exports= User;