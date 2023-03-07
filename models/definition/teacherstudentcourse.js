const { Sequelize, Model,DataTypes} = require("sequelize");
let sequelize = require("../../common/dbConnection");

class teacherstudentcourse extends Model{

}
teacherstudentcourse.init(
    {
    id :{
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
        type : DataTypes.INTEGER,
    },

},
{
    timeStamps :true,
    paranoid : true,
    sequelize : sequelize,
    modelName: "teacherstudentcourse"
},
);
module.exports= teacherstudentcourse;