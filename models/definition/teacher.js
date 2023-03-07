const { Sequelize, Model,DataTypes} = require("sequelize");
let sequelize = require("../../common/dbConnection");

class teacher extends Model{

}
teacher.init(
    {

    id :{
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
        type : DataTypes.INTEGER,
    },

    officeLocation:{
     
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
    modelName: "teacher"
},
);
module.exports= teacher;