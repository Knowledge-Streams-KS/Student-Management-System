const Sequelize = require('sequelize');
var config = require('../../config.json');
const db = {};
config = config.db;
let sequelize = require('../../common/dbConnection');
const users  = require('../definition/users');
const  students= require('../definition/students');
const teacher= require('../definition/teacher');
const courses=require('../definition/courses');
const teacherstudentcourse = require('./teacherstudentcourse');
// const studentCourse=require('../definition/studentCourse');
// const teacherCourse=require('../definition/teacherCourse');
// const studentTeacher=require('../definition/studentTeacher');



const models = {
    users,
    students,
    teacher,
    courses,
    teacherstudentcourse
    


};

users.hasOne(students,{onDelete: 'CASCADE', foreignKey: 'userId'})
students.belongsTo(users,{onDelete: 'CASCADE', foreignKey: 'userId'});

users.hasOne(teacher,{onDelete: 'CASCADE', foreignKey: 'userId'})
teacher.belongsTo(users,{onDelete: 'CASCADE', foreignKey: 'userId'});

//Junction table
teacher.hasMany(teacherstudentcourse,{onDelete:'CASCADE',foreignKey:'teacherId'})
teacherstudentcourse.belongsTo(teacher,{onDelete:'CASCADE',foreignKey:'teacherId'});

courses.hasMany(teacherstudentcourse,{onDelete:'CASCADE',foreignKey:'courseId'})
teacherstudentcourse.belongsTo(courses,{onDelete:'CASCADE',foreignKey:'courseId'});


students.hasMany(teacherstudentcourse,{onDelete:'CASCADE',foreignKey:'studentId'})
teacherstudentcourse.belongsTo(students,{onDelete:'CASCADE',foreignKey:'studentId'});

  
sequelize.models= models;
db.sequelize=sequelize;
db.Sequelize=Sequelize;

module.exports={db,models};