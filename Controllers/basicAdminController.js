

const mongoose=require("mongoose");
require("./../Modals/adminModel");
require("./../Modals/basicAdminModel");
require("./../Modals/bookModel");
require("./../Modals/employeeModel");
require("./../Modals/memberModel");



const AdminSchema=mongoose.model("admins");
const BasicAdminSchema=mongoose.model("basicAdmins");
const BookSchema=mongoose.model("books");
const EmployeeSchema=mongoose.model("employees");
const MemberSchema=mongoose.model("members");





exports.getAllBasicAdmin=(request,response,next)=>{
    console.log(request.query);
    response.send("now in get basicAdmin");
}


exports.addBasicAdmin=(request,response,next)=>{
    console.log(request.query);
    response.send("now in get basicAdmin");
}


exports.updateBasicAdmin=(request,response,next)=>{
    console.log(request.query);
    response.send("now in get basicAdmin");
}


exports.deleteBasicAdmin=(request,response,next)=>{
    console.log(request.query);
    response.send("now in get basicAdmin");
}
