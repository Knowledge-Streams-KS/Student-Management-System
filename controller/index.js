module.exports={
    //users
    
    createuser : require("./users/createUser"),
    getUsers : require("./users/getUser"),
    updateuser: require("./users/updateUser"),
    getuserbyid : require("./Users/getuserbyid"),
    removeuser : require("./Users/removeuser"),

    //students
    createstudent : require("./students/createStudent"),
    getStudent: require("./students/getStudent"),
    getstudentbyid : require("./students/getstudentbyid"),

    //teacherstudentcourse
    createTeacherStudentCourse : require("./teacherstudentcourse/createTeacherStudentCourse"),
    //teacher
    createteacher : require("./teacher/createteacher"),
    //course
    createcourse : require("./course/createcourse")
}