const { Sequelize, Model,DataTypes} = require("sequelize");
let sequelize = require("../../common/dbConnection");

class courses extends Model{

}
courses.init(
    {

    Id :{
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
    courseLab:{
        allowNull : true,
        type : DataTypes.STRING(),
    },
    courseCode : {
        allowNull : false,
        type :  DataTypes.STRING(),

    }
    

},
{
    timeStamps :true,
    paranoid : true,
    sequelize : sequelize,
    modelName: "courses"
},
);
module.exports= courses;