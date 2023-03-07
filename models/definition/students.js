const { Sequelize, Model,DataTypes} = require("sequelize");
let sequelize = require("../../common/dbConnection");

class students extends Model{

}
students.init(
    {

    id :{
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
        type : DataTypes.INTEGER,
    },
    
    rollNo:{
        unique : true,
        allowNull : false,
        type :  DataTypes.STRING(),
    },
    semester:{
        
        allowNull : false,
        type :  DataTypes.STRING(),
    },
    deptName:{
       
        allowNull : false,
        type :  DataTypes.STRING(),
    },

},
{
    timeStamps :true,
    paranoid : true,
    sequelize : sequelize,
    modelName: "students"
},
);
module.exports= students;